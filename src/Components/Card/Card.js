import React from 'react';
import './Card.css';

const Card = (props) => {
  
  return(
    <div className='card'>
      <h3>{props.name}</h3>
      <h4>{props.properties.planet}</h4>
      <h4>{props.properties.population}</h4>
      <h4>{props.properties.species}</h4>
      <div>
        <button>Favs</button>
      </div>
    </div>
  )
}

export default Card;