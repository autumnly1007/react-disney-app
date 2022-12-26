import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import './Row.css';

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const response = await axios.get(fetchUrl);
    console.log('response', response);
    setMovies(response.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    console.log('movie', movie);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
          <span
            className='arrow'
            onClick={() => (document.getElementById(id).scrollLeft -= window.innerWidth - 80)}
          >
            {'<'}
          </span>
        </div>
        <div className='row__posters'>
          {movies.map((movie) => (
            <img
              key={movie.id}
              className='row__poster'
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
              onClick={handleClick(movie)}
            />
          ))}
        </div>
        <div className='slider__arrow-right'>
          <span
            className='arrow'
            onClick={() => (document.getElementById(id).scrollLeft += window.innerWidth - 80)}
          >
            {'>'}
          </span>
        </div>
      </div>
      {modalOpen ? <div>modal</div> : null}
    </div>
  );
};

export default Row;
