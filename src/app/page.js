"use client";

import Head from 'next/head';
import './styles/style.css'
import Footer from './component/Footer';
import { useEffect, useState } from 'react';
import Header from './component/Header';
import ProductsIntro from './component/ProductsIntro';
import Sidebar from './component/Sidebar';
import ProductGrid from './component/ProductGrid';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="Explore our range of high-quality products. Find what you need at great prices!" />
      </Head>
      <Header/>

      <main>
        <ProductsIntro/>
        <div className="main-content">
        <Sidebar/>

        <ProductGrid/>
        </div>
      </main>

      <Footer/>

    </div>
  );
}

