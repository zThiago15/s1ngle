import React from 'react';
import { SlMagnifier } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/imgs/logo.svg';

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between m-2">
      <img className="w-52" src={Logo} alt="Logo s1ngle" />
      <span className="lg: flex items-center bg-lightgrey p-2 w-96 h-10">
        <SlMagnifier />
        <input className="text-darkgrey bg-transparent ml-2" placeholder="Escreva aqui..." />
      </span>
      <div className="mt-5">
        <button
          className="text-white bg-black text-xl mr-8"
          type="button"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          className="text-white p-2 border-white border-2 rounded-3xl text-xl"
          type="button"
          onClick={() => navigate('/signup-artist')}
        >
          Cadastrar-se
        </button>
      </div>
    </nav>
  );
}
