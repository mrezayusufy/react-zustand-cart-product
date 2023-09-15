import React from 'react';
import useProductStore from './store/productStore';
import Product from './product';

function ProductList() {
  const products = useProductStore((state) => state.products);
  return (
    <>
      <div className="products">
        {products.map((product) => (
          <>
            <Product item={product} key={product.id} />
          </>
        ))}
      </div>
      <div>
          {products.map((item, index) => (
            <span key={index}>
              <input 
              type="radio" 
              name="product"
              id={`product-${item.id}`} 
              value="product"/>
            </span>
          ))}
      </div>
      <div className="dots">{products.map((item,index) => (
        <label key={index} htmlFor={`product-${item.id}`}>1</label>
      ))}</div>
    </>
  );
}

export default ProductList;
