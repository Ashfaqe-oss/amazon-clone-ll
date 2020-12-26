import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct ( { id, title, info, image, price, hideButton, hidePrice } ) {
  const [dispatch] = useStateValue();

  const RemoveFromCart = () => {
    //removing item from basket..
    dispatch( {
      type: "REMOVE_FROM_BASKET",
      id: id,
    } );
  };

  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct__image" src={image} alt="" />

      <div className="CheckoutProduct__info">
        <h3>{title}</h3>
        <p>{info}</p>
        {!hideButton && (
          <button onClick={RemoveFromCart} className="CheckoutProduct__delete">
            Delete
          </button>
        )}

      </div>
      {!hidePrice && (
        <p className="CheckoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
      )}

    </div>
  );
}

export default CheckoutProduct;
