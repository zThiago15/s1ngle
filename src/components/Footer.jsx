import React from 'react';
import {
  SlSocialFacebook, SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram,
} from 'react-icons/sl';
import Logo from '../assets/imgs/logo.svg';

export default function Footer() {
  return (
    <div className="flex flex-col">
      <img src={Logo} alt="logo" className="w-[15em] m-auto" />
      <hr className="w-[50em] m-auto my-5" />
      <div className="flex justify-evenly">
        <span>
          <strong>Serviços</strong>
          <p>Agenciamento</p>
          <p>e-commerce</p>
          <p>customizações</p>
        </span>
        <span>
          <strong>Mídia social</strong>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </span>
        <span>
          <strong>Contrate</strong>
          <p>Artistas</p>
          <p>Eventos</p>
          <p>Graffiti</p>
        </span>
        <span>
          <strong>Contato</strong>
          <p>Entre em contato a qualquer momento</p>
          <div className="flex justify-between w-[10em]">
            <SlSocialFacebook />
            <SlSocialTwitter />
            <SlSocialLinkedin />
            <SlSocialInstagram />
          </div>
        </span>
      </div>

    </div>
  );
}
