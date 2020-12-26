import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__top">
        <div className="checkout__ad">
          <div className="checkout__adComponents">
            <strong className="checkout__adHighlight1">
              Pay faster for all your shopping needs{" "}
              <span>
                <strong className="checkout__adHighlight2">
                  with Amazon Pay balance
                </strong>
              </span>
              <br></br>
            </strong>
            <p>Get Instant refund on cancellations | Zero payment failures</p>
          </div>
        </div>
        {basket?.length > 0 && (
          <div className="checkout__right">
            <Subtotal />
          </div>
        )}
      </div>
      <h1>Your Shopping Cart</h1>
      {basket?.length === 0 ? (
        <div className="checkout__items">
          <h4 className="checkout__comment">Your Shopping basket is Empty !</h4>
          <p>Come on hurry up..</p>
          <p>Go on and pick up your favourite things</p>
        </div>
      ) : (
        <div className="checkout__items">
          <div className="checkout__comment">
            <h3>You wanna have these things don't you!</h3>
            <p>Price</p>
          </div>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              info={item.info}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
