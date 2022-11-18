import React from 'react';
import Logo from '../assets/imgs/logo.svg';

export default function Header() {
  return (
    <nav>
      <img src={Logo} alt="Logo s1ngle" />
      <input placeholder="Escreva aqui..." />
      <button type="button">Login</button>
      <button type="button">Cadastrar-se</button>
    </nav>
  );
}
