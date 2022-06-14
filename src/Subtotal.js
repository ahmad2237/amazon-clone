import React from "react";
import "./subtotal.css";
// import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  // const value=getBasketTotal(basket)
  return (
    <div className="subtotal">
      <p>
      <strong>Subtotal </strong> ({basket.length} items): <strong>0</strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" /> This order Subtotal contains a gift
      </small>
      
  
        
      <button>proceed to checkout</button>
    </div>
    
    );
}

export default Subtotal;
