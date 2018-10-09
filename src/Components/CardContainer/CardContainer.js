import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = (props) => {
  return (
    <section className="card-container">
      <Card /> 
    </section>
  );
}

export default CardContainer;