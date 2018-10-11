import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import * as API from '../API/API';

const CardContainer = ({starWarsDirectory}) => {
  let cards;
  if(typeof starWarsDirectory.people === 'object') {
    cards = starWarsDirectory.people.map((card, i) => {
      return <Card
                key={i + 'people'}
                name={card.name}
                properties={card.properties}
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