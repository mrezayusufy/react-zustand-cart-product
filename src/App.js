import React, { useEffect } from 'react';
import './style.css';
import useCartStore from './store/cartStore';
import Product from './product';
import Cart from './cart';

export default function App() {
  const { products, fetchProducts } = useCartStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div>
      <Cart />
      <h1>Products</h1>
      <div className="products">
        {products.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
