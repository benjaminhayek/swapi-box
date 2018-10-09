import React from 'react';
import './Scroll.css';

const Scroll = ({ movieScroll }) => {
  const getRandomIndice = Math.floor(Math.random() * Math.floor(6));
  const randomMovie = movieScroll[getRandomIndice];
  return (
    <section className='scroll-container'>
      <p>{randomMovie.opening_crawl}</p>
      <h3>{randomMovie.title}</h3>
      <h4>{randomMovie.release_date}</h4>
    </section>
  )
}

export default Scroll;