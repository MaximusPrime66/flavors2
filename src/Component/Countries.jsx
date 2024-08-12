import React from 'react';
import './Countries.css'; // Import your CSS file

import { Link } from 'react-router-dom';

const movieList = [
  {
    id: 'italy',
    title: 'Italy',
    description: 'Explore the rich flavors of Italian cuisine, from pasta to pizza and more..',
  },
  {
    id: 'france',
    title: 'France',
    description: 'Discover the elegance of French cuisine, including classic dishes like croissants and coq au vin.',
  },
  {
    id: 'korea',
    title: 'Korea',
    description: 'Savor the vibrant tastes of Korean food, featuring dishes like kimchi and bibimbap.',
  },
  {
    id: 'japan',
    title: 'Japan',
    description: 'Delight in Japanese cuisine, with specialties such as sushi, ramen, and tempura.',
  },
  {
    id: 'china',
    title: 'China',
    description: 'Experience the diverse flavors of Chinese food, from dim sum to Peking duck.',
  },
  {
    id: 'india',
    title: 'India',
    description: 'Enjoy the rich and spicy flavors of Indian cuisine, including curry, naan, and biryani.',
  },
];

const MovieCard = ({ id, title, description }) => {
  let backgroundImage;
  let linkTo;

  switch (title) {
    case 'Italy':
      backgroundImage = 'url(https://wallpaperswide.com/download/lake_como_night_bellagio_italy-wallpaper-3840x1600.jpg)';
      linkTo = '/italianrecipes'; // Specific link for Italy
      break;
    case 'France':
      backgroundImage = 'url(https://www.destinationcanada.com/sites/default/files/styles/internal_/public/2024-06/France-1920x1080_0.jpg?itok=j_AjQXss)';
      linkTo = '/frenchrecipes';
      break;
    case 'Korea':
      backgroundImage = 'url(https://preview.redd.it/gu869cpnkv041.png?auto=webp&s=82d701d0f5e9e90ccf040105d30ff7dd5c8998b4)';
      linkTo = '/koreanrecipes';
      break;
    case 'Japan':
      backgroundImage = 'url(https://i.pinimg.com/originals/59/dd/6b/59dd6b05bb6e87070969d00c48c3a57c.png)';
      linkTo = '/japanrecipes';
      break;
    case 'China':
      backgroundImage = 'url(https://preview.redd.it/5bbm2bct09w41.png?auto=webp&s=2169a9d09e91ebf71992cfa2c8a5a120a948d3a3)';
      linkTo = '/chineserecipes';
      break;
    case 'India':
      backgroundImage = 'url(https://images7.alphacoders.com/927/927844.jpg)';
      linkTo = '/indianrecipes';
      break;
    default:
      backgroundImage = '';
      linkTo = '#'; // Fallback link
  }

  return (
    <div className="movie-card" style={{ backgroundImage }}>
      <div className="movie-card__overlay"></div>
      <div className="movie-card__content">
        <div className="movie-card__header">
          <h1 className="movie-card__title">{title}</h1>
        </div>
        <p className="movie-card__desc">{description}</p>
        <Link to={linkTo}>

          <button className="btn btn-outline movie-card__button" type="button">View</button>
        </Link>
      </div>
    </div>
  );
};

const MovieCardList = () => (
  <div id="movie-card-list">
    {movieList.map(movie => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        description={movie.description}
      />
    ))}
  </div>
);

export default MovieCardList;
