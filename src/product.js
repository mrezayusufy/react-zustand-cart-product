import PlusCartIcon from './icons/plusCartIcon';
import React from 'react';
import useCartStore from './store/cartStore';

const Product = ({ item }) => {
  const addToCart  = useCartStore((state) => state.addToCart);
  const handleAddToCart = React.useCallback(
    (product) => {
      addToCart(product);
    },
    [addToCart]
  );
  return (
    <div className="product" onTouchMove={(event) => console.log(event)}>
      <h3>{item.title}</h3>
      <span>${item.price}</span>
      <img src={item.image} draggable={false} onTouchMove={(e) => console.log(e)} width={200} height={200} />
      <label>{item.category}</label>
      <div className="buttons">
        <button onClick={() => handleAddToCart(item)}>
          <PlusCartIcon />
        </button>
      </div>
    </div>
  );
};
export default Product;
