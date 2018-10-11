import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import * as API from '../API/API';

const CardContainer = ({starWarsDirectory}) => {
  let cards;
  if(typeof starWarsDirectory.people === 'object') {
    cards = starWarsDirectory.people.results.map(card => {
          return <Card 
                 name={card.name}
                 homeworld={API.searchStarWarsAPI(card.homeworld)}
                 species={API.searchStarWarsAPI(card.species)}
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