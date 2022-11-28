import React from 'react';
import { MdVerified } from 'react-icons/md';
import { BiHeart } from 'react-icons/bi';
import Artist1 from '../assets/imgs/artist1.jpeg';
import ArtSea from '../assets/arts/aesthetic-sea.jpg';

export default function ArtistArt() {
  return (
    <div className="shadow-lg w-[15em] bg-[#F3F3F3] p-5 flex flex-col items-center w-[20em]">
      <span className="flex items-center">
        <img src={Artist1} alt="artist" className="rounded-[50%] w-8" />
        <p>Ray Pamber</p>
        <MdVerified className="text-[#49D7D7]" />
        <BiHeart className="text-darkgrey w-5 " />
      </span>
      <img src={ArtSea} alt="art" className="w-48" />
      <span className="mt-3 flex items-center justify-between w-[13em]">
        <p>Aesthetic Sea</p>
        <button type="button" className="bg-black text-white p-2 rounded">Comprar</button>
      </span>
    </div>
  );
}
