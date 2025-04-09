import React, { useEffect, useState } from 'react';
import '../styles/productGrid.css'; // Assuming you have a CSS file for styling

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the liked status
    }));
  };

  return (
    <section className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-title">{product.title}</div>
          <div className="product-price">${product.price}</div>
          <div
            className={`heart-icon ${likedProducts[product.id] ? 'liked' : ''}`}
            onClick={() => toggleLike(product.id)}
          >
            ♥
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductGrid;