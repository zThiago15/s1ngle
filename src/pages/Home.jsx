import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import ArtistArt from '../components/ArtistArt';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Descubra Artista Underground e Artes exclusivas</h1>
          <span>
            <img src="" alt="artist name 1" />
            <img src="" alt="artist name 2" />
            <img src="" alt="artist name 3" />
            <strong>100+</strong>
            <p>Os melhores artistas</p>
          </span>
          <p>Arrow</p>
        </section>
        <section>
          <img src="" alt="main" />
          <div>
            <span>
              <strong>52.1k+</strong>
              <p>Artes</p>
            </span>
            <span>
              <strong>1.3M+</strong>
              <p>Artistas</p>
            </span>
            <span>
              <strong>40K+</strong>
              <p>Vendas</p>
            </span>
          </div>
        </section>
        <section>
          <div>
            <h2>Escolha do Editor</h2>

            <button type="button">
              Ver tudo
              <BsArrowRight />
            </button>
          </div>
          <ArtistArt />
          <ArtistArt />
          <ArtistArt />
        </section>
        <section>
          <h2>Nossas Galerias</h2>

          <button type="button">
            Ver tudo
            <BsArrowRight />
          </button>
          <Gallery />
          <Gallery />
          <Gallery />
        </section>
        <section>
          <h2>Como ser um criador</h2>
          <ol>
            <li>
              <h3>Passo1</h3>
              <strong>Crie uma conta</strong>
              <p>
                Adicione todos os dado solicitados no cadastro e envie as documentações necessárias
              </p>
            </li>
            <li>
              <h3>Passo2</h3>
              <strong>Agurda aprovação</strong>
              <p>
                Nossa equipe irá analisar seus dados em até 24 horas, e
                caso aprovado, receberá instruções por e-mail.
              </p>
            </li>
            <li>
              <h3>Passo1</h3>
              <strong>Crie uma conta</strong>
              <p>
                Complete seu perfil, cadastre produtos, galerias e colabs e pronto,
                nós fazemos todo o resto.
              </p>
            </li>
          </ol>
        </section>
        <span>
          <p>
            Junte-se a nossa
            <strong>Comunidade</strong>
          </p>
          <div>
            <input type="email" placeholder="Seu e-mail" />
            <button type="button">Juntar-se</button>
          </div>
        </span>
      </main>
      <Footer />
    </>
  );
}
