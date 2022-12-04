import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landpage from './pages/Landpage';
import Login from './pages/Login';
import SignupArtist from './pages/SignupArtist';

function App() {
  return (
    <Routes>
      <Route path="/signup-artist" element={<SignupArtist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Landpage />} />
    </Routes>
  );
}

export default App;
