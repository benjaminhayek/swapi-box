import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';
import Card from  '../Card/Card';
import CardContainer from '../CardContainer/CardContainer';
import Scroll from '../Scroll/Scroll';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          SWAPI BOX
        </header>
        <Scroll />
        <Button />
        <CardContainer />
      </div>
    );
  }
}

export default App;
