import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Artists from './pages/Artists';
import Home from './pages/Home';
import Landpage from './pages/Landpage';
import Login from './pages/Login';
import Products from './pages/Products';
import ProfileArtist from './pages/ProfileArtist';
import SignupArtist from './pages/SignupArtist';

function App() {
  return (
    <Routes>
      <Route path="/signup-artist" element={<SignupArtist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artists/profile/:id" element={<ProfileArtist />} />
      <Route path="/products" element={<Products />} />
      {/* <Route path="/products/detail/:id" element={} /> */}

      <Route path="/" element={<Landpage />} />
    </Routes>
  );
}

export default App;
