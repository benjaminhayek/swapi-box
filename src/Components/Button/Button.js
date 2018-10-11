import React, { Component } from 'react';
import './Button.css';

class Button extends Component => {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section className="button-container">
        <button 
          onClick={console.log('Favorites')} 
          className='favorites-btn button'>
          <i className="fab fa-trade-federation"></i>
            Favorites=0
        </button>
        <button 
          onClick={() => searchStarWarsApi(directory.people)}  
          className='people-btn button' >
          <i className="fab fa-jedi-order"></i>
            People
        </button>
        <button 
          onClick={() => searchStarWarsApi(directory.planets)}  
          className='planets-btn button'>
          <i className="fab fa-empire"></i>
            Planets
        </button>
        <button 
          onClick={() => searchStarWarsApi(directory.vehiclesu)}  
          className='vehicles-btn button'>
          <i className="fab fa-galactic-republic"></i>
            Vehicles
        </button>
      </section>
    )
  }
}

export default Button;