import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({starWarsDirectory, stateOfButtons, favoriteACard}) => {
  const cardCategory = Object.keys(stateOfButtons).filter(category => {
    return stateOfButtons[category]
  }).toString();
  let cards;
  if(typeof starWarsDirectory[cardCategory] === 'object') {
    cards = starWarsDirectory[cardCategory].map((card, i) => {
      console.log(card)
      return <Card
                key={i + [cardCategory]}
                name={card.name}
                properties={card.properties}
                favoriteACard={favoriteACard}
                id={card.id}
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