import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({starWarsDirectory, stateOfButtons, favoriteACard, favorited}) => {
  const cardCategory = Object.keys(stateOfButtons).filter(category => {
    return stateOfButtons[category]
  }).toString();
  let cards;
  if(typeof starWarsDirectory[cardCategory] === 'object') {
    cards = starWarsDirectory[cardCategory].map((card, i) => {
      return <Card
                key={i + [cardCategory]}
                name={card.name}
                properties={card.properties}
                favoriteACard={favoriteACard}
                id={card.id}
                favorited={card.favorited}
                /> 
              })
            }
    return (
      <section className="card-container">
        {cards}
      </section>
    );
}

export default CardContainer;