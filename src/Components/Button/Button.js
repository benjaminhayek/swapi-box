import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <section className="buttons">
      <button>People</button>
      <button>Planets</button>
      <button>Vehicles</button>
      <button>Favs</button>
    </section>
  )
}

export default Button;