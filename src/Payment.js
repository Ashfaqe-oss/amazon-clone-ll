import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import PaymentSubtotal from "./PaymentSubtotal";
import { useStateValue } from "./StateProvider";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment () {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState( false );
  const [processing, setProcessing] = useState( "" );
  const [error, setError] = useState( null );
  const [disabled, setDisabled] = useState( true );
  const [clientSecret, setClientSecret] = useState( true );
  const [name, setName] = useState( "" );
  const [addressLine1, setAddressLine1] = useState( "" );
  const [addressLine2, setAddressLine2] = useState( "" );
  const [pincode, setPincode] = useState( "" );
  const [paymentAddress, setPaymentAddress] = useState( "" );

  const setNameAndAddress = ( event ) => {
    event.preventDefault();

    setPaymentAddress( addressLine1 + ", " + addressLine2 );
  };

  useEffect( () => {
    //generate special stripe secret for us to charge customers
    const getClientSecret = async () => {
      const response = await axios( {
        method: "post",
        //stripe wants total in currecies subunits
        url: `/payments/create?total=${ getBasketTotal( basket ) * 1.36 }`,
      } );

      setClientSecret( response.data.clientSecret );
    };

    getClientSecret();
  }, [basket] );

  const handleSubmit = async ( event ) => {
    event.preventDefault();

    //fancy stripe stuff
    setProcessing( true );

    await stripe
      .confirmCardPayment( clientSecret, {
        payment_method: {
          card: elements.getElement( CardElement ),
          billing_details: {
            name: name,
            address: paymentAddress,
          },
        },
      } )
      .then( ( { paymentIntent } ) => {
        //paymentIntent = payment conformation

        db.collection( "users" )
          .doc( user?.uid )
          .collection( "orders" )
          .doc( paymentIntent.id )
          .set( {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            name: name,
            address: paymentAddress,
          } );

        setSucceeded( true );
        setError( null );
        setProcessing( false );

        dispatch( {
          type: "EMPTY_BASKET",
        } );

        history.replace( "/orders" );
      } );
  };

  const handleChange = ( event ) => {
    //Listen for changes and display errors
    //as the customer types their card details

    setDisabled( event.empty );
    setError( event.error ? event.error.message : "" );
  };
  return (
    <div className="payment">
      <div className="payment__container">
        {/* delivery address */}
        <h1 className="payment__checkout">
          <Link to="/Checkout">
            Checkout ({basket?.length} {basket?.length > 1 ? "items" : "item"})
          </Link>
        </h1>
        <div className="payment__section1">
          <div className="payment__title">
            <h2>Delivery Address</h2>
          </div>
          <div className="payment__address">

            <form onSubmit={setNameAndAddress}>
              <input type="text" placeholder="Your Name" value={name} onChange={( event ) => { setName( event.target.value ); }} />
              <input type="text" placeholder="Address Line 1" value={addressLine1} onChange={( event ) => { setAddressLine1( event.target.value ); }} />
              <input type="text" placeholder="Address Line 2" value={addressLine2} onChange={( event ) => { setAddressLine2( event.target.value ); }} />
              <input type="text" placeholder="Pincode" value={pincode} onChange={( event ) => { setPincode( event.target.value ); }} />
              <button type="submit">Set Name & Address</button>
            </form>

            <p>
              {user?.email}
              <br />
              {name}
              <br />
              {addressLine1}
              <br />
              {addressLine2}{" - "}{pincode}
            </p>

          </div>

          <div className="payment__subtotal">
            <PaymentSubtotal />
          </div>
        </div>
        {/* review your items */}
        <div className="payment__section2">
          <div className="payment__title2">
            <h2>Review Items for Delivery</h2>
            <p>Price</p>
          </div>
          <div className="payment__items">
            {basket?.map( ( item ) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                info={item.info}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ) )}
          </div>
        </div>
        {/* payment method */}
        <div className="payment__section1">
          <div className="payment__title3">
            <h2>Payment Method</h2>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={( value ) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal( basket )}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={" "}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {processing ? <p>processing</p> : "Proceed to Buy"}
                  </span>
                </button>
              </div>

              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
