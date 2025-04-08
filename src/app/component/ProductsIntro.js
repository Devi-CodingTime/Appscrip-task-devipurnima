// components/ProductsIntro.js
import React from 'react';
import '../styles/productsIntro.css'; // Assuming you have a CSS file for styling

const ProductsIntro = () => {
  return (
    <section className="products-intro">
      <h1 className="products-title">DISCOVER OUR PRODUCTS</h1>
      <p className="products-description">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      <div className="products-toolbar">
        <div className="products-count"><strong>3425 ITEMS</strong></div>
        <div className="filter-toggle">‹ HIDE FILTER</div>
        <div className="sort-dropdown">
          <strong>RECOMMENDED</strong> <span className="arrow">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default ProductsIntro;
