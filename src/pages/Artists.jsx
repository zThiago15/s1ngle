import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import artist1 from '../assets/imgs/artist1.jpeg';
import Header from '../components/home/Header';

export default function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const mockData = [
        {
          img: artist1,
          specialty: 'graffiti',
          name: 'Fernando',
          id: 1,
        },
        {
          img: artist1,
          specialty: 'graffiti',
          name: 'Fernando',
          id: 1,
        },
        {
          img: artist1,
          specialty: 'graffiti',
          name: 'Fernando',
          id: 1,
        },
        {
          img: artist1,
          specialty: 'graffiti',
          name: 'Fernando',
          id: 1,
        },
        {
          img: artist1,
          specialty: 'graffiti',
          name: 'Fernando',
          id: 1,
        },
      ];
      setArtists(mockData);
    };
    getArtists();
  }, []);

  return (
    <div>
      <Header namePage="Artistas" />
      <div className="flex flex-wrap">
        {
          artists.map((artist) => {
            const { id, img, name, specialty } = artist;

            return (
              <Link to={`/artists/${id}`} className="m-5 flex flex-col items-center w-[20%]">
                <img src={img} alt={name} className="rounded-full" />
                <h2 className="font-bold">{name}</h2>
                <p>{specialty}</p>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}
