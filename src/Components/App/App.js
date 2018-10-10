import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';
import Card from  '../Card/Card';
import Scroll from '../Scroll/Scroll';
// import 'react-star-wars-crawl/lib/index.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movieScroll: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/films/")
      .then(response => response.json())
      .then(json => this.setState({movieScroll: json.results, isLoaded:true}))
  }

  render() {
    const { movieScroll, isLoaded } = this.state
    if(!isLoaded){
      return <div> Loading.... </div>;
    } else { 
      return (
        <div 
        className="App">
          <section className='content'>
            <Button />
          </section>
            <header>
             <h1 className="title">SWAPI BOX</h1>
              <Scroll movieScroll={ movieScroll }/>
            </header>
        </div>
      );
    }
  }
}

export default App;
