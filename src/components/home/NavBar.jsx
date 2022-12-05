import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/imgs/logo.svg';
import { changeStateNavbar } from '../../redux/slices/sliceNavBar';

export default function NavBar() {
  const [userLogged] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const disableNavBarAndNavigate = (routeName) => {
    dispatch(changeStateNavbar(false));
    navigate(`/${routeName}`);
  };

  return (
    <nav className="bg-black text-white w-[120%] h-[100vh]">
      <img src={Logo} alt="logo s1ngle" className="w-[13em] p-2" />
      { userLogged && (
        <main className="flex flex-col justify-evenly items-start h-[10em] m-5 mb-[5em]">
          <button type="button" onClick={() => disableNavBarAndNavigate('home')}>HOME</button>
          <button type="button" onClick={() => disableNavBarAndNavigate('artists')}>ARTISTAS</button>
          <button type="button" onClick={() => disableNavBarAndNavigate('products')}>PRODUTOS</button>
          <button type="button" onClick={() => disableNavBarAndNavigate('customize')}>PERSONALIZAR</button>
        </main>
      )}
      {
        !userLogged && (
          <div className="h-[13em] m-5">
            <button type="button">Logar</button>
          </div>
        )
      }
      <aside className="flex flex-col  justify-evenly items-start h-[5em] m-5">
        <button type="button">CONFIGURAÇÕES</button>
        <button type="button">VER PERFIL</button>
      </aside>
    </nav>
  );
}
