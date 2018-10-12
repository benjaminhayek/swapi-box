import React, { Component } from 'react';
import './Button.css';

const Button = ({ buttonHasBeenPressed, directory, selected }) => {
    return (
      <section className="button-container">
        <button 
          onClick={() => buttonHasBeenPressed( null,'favorite')} 
          className={`${selected.favorite ? 'selected': null} favorites-btn button`}>
          <i className="fab fa-trade-federation"></i>
            Favorites=0
        </button>
        <button 
          onClick={() => buttonHasBeenPressed(directory.people, 'people')}  
          className={`${selected.people ? 'selected': null} people-btn button`} 
        >
          <i className="fab fa-jedi-order"></i>
            People
        </button>
        <button 
          onClick={() => buttonHasBeenPressed(directory.planets, 'planets')}  
          className={`${selected.planets ? 'selected': null} planets-btn button`} >
          <i className="fab fa-empire"></i>
            Planets
        </button>
        <button 
          onClick={() => buttonHasBeenPressed(directory.vehicles, 'vehicles')}  
          className={`${selected.vehicles ? 'selected': null} vehicles-btn button`}>
          <i className="fab fa-galactic-republic"></i>
            Vehicles
        </button>
      </section>
    )
  }


export default Button;