import React from 'react';
import { Avatar } from '@nextui-org/react';
import { BsArrowDown } from 'react-icons/bs';
import Blob from '../../assets/imgs/symbols/blob.svg';
import Star from '../../assets/imgs/symbols/star.svg';
import Line from '../../assets/imgs/symbols/line.svg';
import Art from '../../assets/imgs/art.svg';
import Artist1 from '../../assets/imgs/artist1.jpeg';
import Artist2 from '../../assets/imgs/artist2.jpeg';
import Artist3 from '../../assets/imgs/artist3.jpeg';
import GridLayout from '../../assets/imgs/bg-grid-layout.svg';

export default function Initial() {
  return (
    <article>
      <img className="absolute top-0 right-0 w-[30rem] -z-10" src={GridLayout} alt="grid layout" />
      <section className="w-[450px] mt-16 ml-4 w-full flex justify-around">
        <div>
          <img src={Blob} alt="blob" className="absolute -z-10 w-36 mb-5" />
          <h1 className="w-[500px] text-3xl mt-10 ml-10">
            Descubra
            <strong> Artistas Underground </strong>
            e
            <strong> Artes exclusivas</strong>
          </h1>
          <span className="flex items-center mt-24">
            <Avatar.Group className="ml-10">
              <Avatar src={Artist1} alt="artist name 1" size="xl" />
              <Avatar src={Artist2} alt="artist name 2" size="xl" />
              <Avatar src={Artist3} alt="artist name 3" size="xl" />
            </Avatar.Group>
            <div>
              <strong className="text-2xl">100+</strong>
              <p className="text-lg text-darkgrey">Os melhores artistas</p>
            </div>
          </span>
          <BsArrowDown className="text-[50px] mt-5 ml-10" />
        </div>
        <div className="flex flex-col justify-between">
          <img src={Star} alt="star" className="mr-10" />
          <img src={Line} alt="line" className="ml-10" />
        </div>
        <div className="flex mr-56 items-end">
          <img src={Art} alt="Art" className="w-80" />
          <div className="ml-2 flex flex-col">
            <span>
              <h2 className="text-white text-lg font-bold">52.1K+</h2>
              <p className="text-darkgrey">Artes</p>
            </span>
            <span>
              <h2 className="text-white text-lg font-bold">1.3M+</h2>
              <p className="text-darkgrey">Artistas</p>
            </span>
            <span>
              <h2 className="text-white text-lg font-bold">40K+</h2>
              <p className="text-darkgrey">Vendas</p>
            </span>
          </div>
        </div>
      </section>
    </article>
  );
}
