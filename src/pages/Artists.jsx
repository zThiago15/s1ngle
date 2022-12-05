import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import artist1 from '../assets/imgs/artist1.jpeg';
import Header from '../components/home/Header';
import NavBar from '../components/home/NavBar';
import { selectShowNavbar } from '../redux/slices/sliceNavBar';

export default function Artists() {
  const [artists, setArtists] = useState([]);
  const { showNavBar } = useSelector(selectShowNavbar);

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
      <span className={showNavBar ? 'absolute' : 'hidden'}>
        <NavBar />
      </span>
      <Header namePage="Artistas" />
      <div className="flex flex-wrap">
        {
          artists.map((artist) => {
            const { id, img, name, specialty } = artist;

            return (
              <Link
                to={`/artists/profile/${id}`}
                className="m-5 flex flex-col items-center w-[20%]"
                key={Math.random() * 1000}
              >
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
