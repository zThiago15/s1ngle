import React, { useEffect, useState } from 'react';
import artist1 from '../assets/imgs/artist1.jpeg';
import Header from '../components/home/Header';

export default function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const mockData = [
        {
          img: artist1,
          speacialty: 'graffiti',
          name: 'fernando',
        },
        {
          img: artist1,
          speacialty: 'graffiti',
          name: 'fernando',
        },
        {
          img: artist1,
          speacialty: 'graffiti',
          name: 'fernando',
        },
      ];
      setArtists(mockData);
    };
    getArtists();
  }, []);

  return (
    <div>
      <Header namePage="Artistas" />
    </div>
  );
}
