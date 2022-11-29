import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landpage from './pages/Landpage';
import Login from './pages/Login';
import SignupArtist from './pages/SignupArtist';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landpage />} />
      <Route path="/signup-artist" element={<SignupArtist />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
