import React from 'react';
import { useSelector } from 'react-redux';
import AnimeCard from '../components/AnimeCard';
import './Anime.css';

const AnimePage = () => {
  const data = useSelector((state) => state.animeReducer.animes);
  return (
    <div className="anime-page">
      <div className="header">
        <div className="header-img">
          <img src="https://animesher.com/orig/1/152/1526/15260/animesher.com_hunter-x-hunter-gif-hisoka-1526048.gif" alt="Gun and hisoka" />
        </div>
        <div className="header-title">
          <h3>Anime Collections</h3>
          <p>Anime World</p>
        </div>
      </div>
      <div className="anime-list">
        <h4>List of Animes </h4>
      </div>
      <div>
        {data.map((anime) => (
          <AnimeCard
            key={anime.id}
            name={anime.name}
            image={anime.image}
          />
        ))}

      </div>
    </div>

  );
};

export default AnimePage;
