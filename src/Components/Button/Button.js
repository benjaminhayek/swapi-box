import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <section className="button-container">
      <button className='people-btn button' ><i class="fab fa-jedi-order"></i>People</button>
      <button className='planets-btn button'><i class="fab fa-empire"></i>Planets</button>
      <button className='vehicles-btn button'><i class="fab fa-galactic-republic"></i>Vehicles</button>
      <button className='favorites-btn button'><i class="fab fa-trade-federation"></i>Favorites</button>
    </section>
  )
}

export default Button;