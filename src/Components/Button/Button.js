import React, { Component } from 'react';
import './Button.css';

const Button = ({ buttonHasBeenPressed, directory }) => {
    return (
      <section className="button-container">
        <button 
          onClick={console.log('Favorites')} 
          className='favorites-btn button'>
          <i className="fab fa-trade-federation"></i>
            Favorites=0
        </button>
        <button 
          onClick={() => buttonHasBeenPressed(directory.people, 'people')}  
          className='people-btn button' >
          <i className="fab fa-jedi-order"></i>
            People
        </button>
        <button 
          onClick={() => buttonHasBeenPressed(directory.planets, 'planets')}  
          className='planets-btn button'>
          <i className="fab fa-empire"></i>
            Planets
        </button>
        <button 
          onClick={() => buttonHasBeenPressed(directory.vehicles, 'vehicles')}  
          className='vehicles-btn button'>
          <i className="fab fa-galactic-republic"></i>
            Vehicles
        </button>
      </section>
    )
  }


export default Button;