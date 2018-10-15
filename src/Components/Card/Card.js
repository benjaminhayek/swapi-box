import React from 'react';
import './Card.css';

const Card = (props) => {
  const cardData = props.properties.map((property, i) => {
    return <div key={property + i}>{property}</div>
  })
  return(
    <div className='card'>
      <h3>{props.name}</h3>
      {cardData}
      <div>
        <button onClick={() => props.favoriteACard(props.id)}>
          Favs
        </button>
      </div>
    </div>
  )
}

export default Card;