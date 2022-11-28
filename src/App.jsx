import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landpage from './pages/Landpage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landpage />} />
    </Routes>
  );
}

export default App;
