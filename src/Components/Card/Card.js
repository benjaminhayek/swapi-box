import React from 'react';
import './Card.css';

const Card = (props) => {
  return(
    <div className='card'>
      <h3>{props.name}</h3>
      <h4>{props.homeworld.name}</h4>
      <h4>{props.homeworld.population}</h4>
      <h4>{props.species.name}</h4>
      <div>
        <button>Favs</button>
      </div>
    </div>
  )
}

export default Card;