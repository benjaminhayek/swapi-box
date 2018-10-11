import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';
import Card from  '../Card/Card';
import Scroll from '../Scroll/Scroll';
import * as API from '../API/API';


class App extends Component {
  constructor() {
    super()
    this.state = {
      starWarsDirectory: {
        people: {},
        planets: {},
        vehicles: {},
        favorites: []
    },
      movieScroll: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {
    const starWarsDirectory = await API.searchStarWarsAPI();
    const movieScroll = await API.searchStarWarsAPI(starWarsDirectory.films)

    this.setState({
        starWarsDirectory,
        movieScroll: movieScroll.results, 
        isLoaded: true
      })
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
            <Button 
              searchStarWarsAPI={API.searchStarWarsAPI} 
              directory={this.state.starWarsDirectory} />
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
