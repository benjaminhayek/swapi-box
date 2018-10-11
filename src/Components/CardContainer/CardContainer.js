import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({starWarsDirectory}) => {
  console.log(starWarsDirectory)
  const cards = starWarsDirectory.people.results.map( result => {
    return <Card 
              name={result.name}
            /> 
  })
  return (
    <section className="card-container">
      {cards}
    </section>
  );
}

export default CardContainer;