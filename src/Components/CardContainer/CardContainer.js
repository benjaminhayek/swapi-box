import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import { Route, NavLink } from 'react-router-dom';

const CardContainer = ({starWarsDirectory, stateOfButtons, favoriteACard, favorited}) => {
  const cardCategory = Object.keys(stateOfButtons).filter(category => {
    return stateOfButtons[category]
  }).toString();
  let cards = [];
  if(typeof starWarsDirectory[cardCategory] === 'object') {
    cards = starWarsDirectory[cardCategory].map((card, i) => {
      return  <Route exact path={`/${cardCategory}`} 
                render={ () => {
                  return (
                      <Card
                        key={i + [cardCategory]}
                        name={card.name}
                        properties={card.properties}
                        favoriteACard={favoriteACard}
                        id={card.id}
                        favorited={card.favorited}
                        />
                      )
                    }
                  } 
                /> 
              })
            }
    return (
      <section className={`${cards.length <=0 ? 'no-favs-container' : ''}card-container`}>
        {cards.length <= 0? <div className='no-favs'>NoFavs</div>: cards}
      </section>
    );
}

export default CardContainer;