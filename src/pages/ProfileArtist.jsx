import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/home/Header';
import artistImg from '../assets/imgs/artist1.jpeg';
import sea from '../assets/imgs/arts/aesthetic-sea.jpg';
import NavBar from '../components/home/NavBar';
import { selectShowNavbar } from '../redux/slices/sliceNavBar';

export default function ProfileArtist() {
  const [artist, setArtist] = useState({});
  const [arts, setArts] = useState([]);

  const { showNavBar } = useSelector(selectShowNavbar);

  useEffect(() => {
    const getArtistData = async () => {
      const mockArtist = {
        img: artistImg,
        specialty: 'graffiti',
        name: 'Fernando',
        id: 1,
      };
      setArtist(mockArtist);

      const getArts = [
        {
          img: sea,
        },
        {
          img: sea,
        },
        {
          img: sea,
        },
        {
          img: sea,
        },
        {
          img: sea,
        },
      ];

      setArts(getArts);
    };

    getArtistData();
  }, []);

  const { img, specialty, name } = artist;

  return (
    <main className="bg-black h-[100vh]">
      <Header namePage="Perfil" />
      <NavBar />
      <div className="flex items-center text-white m-5 w-[5em]">
        <img src={img} alt="artist" className="rounded-full mr-3" />
        <span>
          <h2 className="text-xl font-bold">{name}</h2>
          <p>{specialty}</p>
        </span>
      </div>
      <div className="bg-white rounded-xl min-h-max mx-5 p-5">
        <h2 className="font-bold">Bio</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem quae quasi similique,
          voluptas illum consequuntur nostrum ratione nobis. Quam labore molestias minima dolorem
          animi ratione asperiores earum itaque officia.
        </p>
      </div>
      <div className="m-5">
        <span className="text-white flex justify-between">
          <h2 className="mb-1">Loja</h2>
          <p className="text-2xl">+</p>
        </span>
        <hr />
        <div className="flex flex-wrap justify-evenly">
          { arts.map(({ img: image }) => (
            <img className="w-[6em] h-[6em] mt-2" key={Math.random()} src={image} alt="sea" />
          )) }
          <div className="w-[6em] h-[6em] mt-2 bg-white flex flex-col items-center justify-center">
            <p className="text-2xl">136</p>
            <p className="text-sm">Ver mais</p>
          </div>
        </div>
      </div>

    </main>
  );
}
