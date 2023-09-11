import React from 'react';
import CartIcon from "./icons/cartIcon"
const Cart = () => {
  return (
    <details className="cart-list">
      <summary><CartIcon/></summary>
      <ul>
        <li>product</li>
      </ul>
    </details>
  );
};
export default Cart;
