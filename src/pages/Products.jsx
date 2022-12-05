import React, { useState, useEffect } from 'react';
import Header from '../components/home/Header';
import NavBar from '../components/home/NavBar';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {

    };
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Header namePage="Produtos" />
    </div>
  );
}
