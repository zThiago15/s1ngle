import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { MdVerified } from 'react-icons/md';
import Artist1 from '../assets/imgs/artist1.jpeg';
import ArtSea from '../assets/arts/aesthetic-sea.jpg';

export default function Gallery() {
  return (
    <div className="shadow-lg bg-[#F3F3F3] p-8 flex flex-col items-center w-[25em] rounded">
      <div className="flex justify-between items-center w-[20em] h-[2em] mb-3">
        <span className="flex items-center justify-evenly w-48">
          <img src={Artist1} alt="artist" className="rounded-[50%] w-14" />
          <p><strong>Ray Pamber</strong></p>
          <MdVerified className="text-[#49D7D7] text-2xl" />
        </span>
        <BiHeart className="text-darkgrey text-4xl" />
      </div>

      <span className="flex justify-evenly">
        <img src={ArtSea} alt="artist" className="p-5 w-[350px]" />
        <div className="flex flex-col justify-evenly  h-[450px]">
          <img src={ArtSea} alt="artist" className="" />
          <img src={ArtSea} alt="artist" className="" />
          <img src={ArtSea} alt="artist" className="" />
        </div>
      </span>
      <span className="flex justify-between items-center mt-5 w-[20em]">
        <p>Nome Galeria</p>
        <button className="bg-black p-3 text-white rounded" type="button">Ver tudo</button>
      </span>
    </div>
  );
}
