import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue;

    const removeFromBasket=()=>{
        
    }

  return (
    <div className="CheckoutProduct">
      <img src={image} alt="image" className="CheckoutProduct__image" />
      <div className="CheckoutProduct__info">
        <p className="CheckoutProduct__title">{title}</p>
        <p className="CheckoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div CheckoutProduct__rating>
          {Array(rating)
            .fill()
            .map((_, i) => {
              <p>🌟</p>;
            })}
        </div>
        <button onClick={()=>removeFromBasket()}>remove product</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
