import React, { useEffect } from 'react';
import './style.css';
import useProductStore from './store/productStore';
import ProductList from './productList';
import Cart from './cart';

export default function App() {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Cart />
      <h1>Products</h1>
      <ProductList />
    </div>
  );
}
