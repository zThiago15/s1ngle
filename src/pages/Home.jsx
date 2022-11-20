import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import ArtistArt from '../components/ArtistArt';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <p>Descubra Artista Underground e Artes exclusivas</p>
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
            <strong>Escolha do Editor</strong>

            <button type="button">
              Escolha do editor
              <BsArrowRight />
            </button>
          </div>
          <ArtistArt />
          <ArtistArt />
          <ArtistArt />
        </section>
      </main>
    </>
  );
}
