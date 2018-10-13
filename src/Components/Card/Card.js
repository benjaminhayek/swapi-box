import React from 'react';
import './Card.css';

const Card = (props) => {
  const cardData = props.properties.map(property => {
    return <div>{property}</div>
  })
  return(
    <div className='card'>
      <h3>{props.name}</h3>
      {cardData}
      <div>
        <button>Favs</button>
      </div>
    </div>
  )
}

export default Card;