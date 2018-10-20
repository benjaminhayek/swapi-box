import React from 'react';
import './Button.css';
import { Route, NavLink } from 'react-router-dom';

const Button = ({ buttonHasBeenPressed, directory, selected }) => {
    return (
      <section className="button-container">
      <NavLink to='/favorites'
          onClick={() => buttonHasBeenPressed( null,'favorites')} 
          className={`${selected.favorites ? 'selected': null} favorites-btn button`}>
        <i className="fab fa-trade-federation"></i>
            {`Favorites ${directory.favorites.length}`}
      </NavLink>
        <NavLink to='/people' 
          onClick={() => buttonHasBeenPressed(directory.people, 'people')}  
          className={`${selected.people ? 'selected': null} people-btn button`} 
        >
          <i className="fab fa-jedi-order"></i>
            People
        </NavLink>
        <NavLink 
          to='/planets'
          onClick={() => buttonHasBeenPressed(directory.planets, 'planets')}  
          className={`${selected.planets ? 'selected': null} planets-btn button`}>
          <i className="fab fa-empire"></i>
            Planets
        </NavLink>
        <NavLink
          to='/vehicles'
          onClick={() => buttonHasBeenPressed(directory.vehicles, 'vehicles')}  
          className={`${selected.vehicles ? 'selected': null} vehicles-btn button`}>
          <i className="fab fa-galactic-republic"></i>
            Vehicles
        </NavLink>
      </section>
    )
  }


export default Button;