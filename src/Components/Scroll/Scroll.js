import React from 'react';
import './Scroll.css';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import CardContainer from '../CardContainer/CardContainer';

const Scroll = ({ movieScroll, starWarsDirectory }) => {
  const getRandomIndice = Math.floor(Math.random() * Math.floor(6));
  const randomMovie = movieScroll[getRandomIndice];

  return (
    <section className='scroll-container'>
      <CardContainer 
        starWarsDirectory={starWarsDirectory}
      />
      <Crawl>
        <p>{randomMovie.opening_crawl}</p>
        <h3>{randomMovie.title}</h3>
        <h4>{randomMovie.release_date}</h4>
      </Crawl> 
    </section>
  )
}

export default Scroll;