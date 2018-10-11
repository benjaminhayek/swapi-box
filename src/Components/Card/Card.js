import React from 'react';
import './Card.css';

const Card = (props) => {
  return(
    <div className='card'>
      <h3>{props.name}</h3>
      <div>
        <button>Favs</button>
      </div>
      <ul>
        <li>
          pop
        </li>
      </ul>
    </div>
  )
}

export default Card;