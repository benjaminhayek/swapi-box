import React from 'react';
import './Button.css';


const Button = ({searchStarWarsApi, directory}) => {
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
        onClick={() => searchStarWarsApi(directory.vehicles)}  
        className='vehicles-btn button'>
        <i className="fab fa-galactic-republic"></i>
          Vehicles
      u</button>
    </section>
  )
}

export default Button;