import React from 'react';
import {
  SlSocialFacebook, SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram,
} from 'react-icons';
import Logo from '../assets/imgs/logo.svg';

export default function Footer() {
  return (
    <div>
      <img src={Logo} alt="logo" />
      <hr />
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
        <strong>Entre em contato</strong>
        <p>Entre em contato a qualquer momento</p>
        <div>
          <img src={SlSocialFacebook} alt="facebook logo" />
          <img src={SlSocialTwitter} alt="twitter logo" />
          <img src={SlSocialLinkedin} alt="linkedin logo" />
          <img src={SlSocialInstagram} alt="instagram logo" />
        </div>
      </span>
      <hr />
      <p>Made with love by Gui Verdoodt</p>
    </div>
  );
}
