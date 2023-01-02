import React, { useState } from 'react';
import Header from '../components/home/Header';
import NavBar from '../components/home/NavBar';
import Store from '../components/Store';
import artistsForSearch from '../mocks/artists';
import art from '../assets/imgs/arts/aesthetic-sea.jpg';

export default function Home() {
  const [artists] = useState(artistsForSearch);
  const products = [art, art, art, art];

  return (
    <div>
      <NavBar />
      <Header namePage="Home" />
      <div className="flex justify-evenly my-3">
        {
          artists.map(({ img, nome }) => (
            <span key={nome} className="flex flex-col items-center">
              <img
                src={img}
                alt={nome}
                className="rounded-full w-14"
              />
              <p>{nome}</p>
            </span>
          ))
        }
      </div>

      <Store data={{ name: 'centauro', products }} />
      <Store data={{ name: 'renner', products }} />
      <Store data={{ name: 'lyra', products }} />
      <Store data={{ name: 'stateArt', products }} />

    </div>
  );
}
