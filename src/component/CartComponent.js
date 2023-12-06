import { useEffect } from "react";

// css
import "../css/cart.css";

//
function CartComponent() {

  useEffect(() => {
    
  }, [])




  return (
    <>
        <h1 id="cart-title">YOUR CART</h1>
        <div id="cart-container">
          <div className="cart-items-box">
            <input type="checkbox" name="cart-check" className="cart-checkbox"/>
          </div>
        </div>
    </>
  );
}

export default CartComponent;
