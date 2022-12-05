import React from 'react';
import Header from '../components/home/Header';
import NavBar from '../components/home/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header namePage="Home" />
    </div>
  );
}
