import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/home/Header';
import NavBar from '../components/home/NavBar';
import getProducts from '../services/products';

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    getData();
  }, []);

  return (
    <div>
      <NavBar />
      <Header namePage="Produtos" />
      {
        products.map(({ id, price, name, img }) => (
          <Link key={id} to="/">
            <img src={img} alt={name} />
            <h2>{price}</h2>
            <p>{name}</p>
          </Link>
        ))
      }
    </div>
  );
}
