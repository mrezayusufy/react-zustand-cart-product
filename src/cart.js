import React from 'react';
import CartIcon from './icons/cartIcon';
import MinusCartIcon from './icons/minusCartIcon';
import useCartStore from './store/cartStore';
import useCartTotalStore from './store/cartTotalStore';
const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const totalPrice = useCartTotalStore((state) => state.cartTotal);
  console.log(totalPrice)
  return (
    <details className="cart-container">
      <summary>
        <div>
          <CartIcon />
          <span>{cart.length}</span>
          Cart
        </div>
      </summary>
      <ul className="cart-list">
        {cart.map((item) => (
          <li className="cart-item" key={item.id}>
            <img src={item.image} height="100px" width="100px" />
            <div>
              <h5>{item.title}</h5>
              <div className="flex gap row">
                <div>
                  Amount:<div>{item.amount}</div>{' '}
                </div>
                <div>
                  Total Price: <div>{item.totalPrice}</div>
                </div>
              </div>
            </div>
            <div>
              <button onClick={() => removeFromCart(item.id)}>
                <MinusCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div>total:</div>
    </details>
  );
};
export default Cart;
