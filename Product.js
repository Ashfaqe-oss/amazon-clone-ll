import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product ( { id, title, info, price, rating, image } ) {
  const [{ }, dispatch] = useStateValue();

  const addToCart = () => {
    //add item to cart
    dispatch( {
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        info: info,
        image: image,
        price: price,
        rating: rating,
      },
    } );
    dispatch( {
      type: "SET_HOVER",
      hover: true,
    } );
  };

  return (
    <div className="product">
      <div className="product__info">
        <h3 className="product__title">{title}</h3>
        <p className="product__about">{info}</p>
        <div className="product__rating">
          {Array( rating )
            .fill()
            .map( ( _ ) => (
              <span role="img" aria-label="jsx-a11y/accessible-emoji">
                ⭐
              </span>
            ) )}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />
      <p className="product__price">
        <small>₹</small>
        <strong>{price}</strong>
      </p>
      <button onClick={addToCart} className="product__add">
        Pick up
      </button>
    </div>
  );
}

export default Product;
