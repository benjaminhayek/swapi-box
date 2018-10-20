import React from 'react';
import './Card.css';
import img1 from '../../images/mil-falc.svg';
import img2 from '../../images/death-star.svg';
import PropTypes from 'prop-types';

const Card = (props) => {
  const cardData = props.properties.map((property, i) => {
    return <div key={property + i}>{property}</div>
  })
  return(
    <div className='card'>
        <button 
          onClick={() => props.favoriteACard(props.id)}
          className={props.favorited ? 'favorited' : 'null'}
        >
        <img src={props.favorited ? img2 : img1} className='mil-falc' />
          <h3>Favorite</h3>
        </button>
      <h3>{props.name}</h3>
      {cardData}
      <div>
      </div>
    </div>
  )
}

Card.propTypes = {
  props: PropTypes.object
};

export default Card;