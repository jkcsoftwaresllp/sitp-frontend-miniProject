import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Product.css";

const Product = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='head'>All Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center' }}>
        {products.map(product => (
          <div className='image' key={product.id} style={{ border: '3px solid purple', padding: '10px', width: '250px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
            <h3 className='head2'>{product.title}</h3>
            <p className='price'>${product.price}</p>
            <button className='procarts' onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Product;



