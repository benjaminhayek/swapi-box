import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';
import Card from  '../Card/Card';
import Scroll from '../Scroll/Scroll';
import * as API from '../API/API';
// import 'react-star-wars-crawl/lib/index.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      starWarsDirectory: {},
      movieScroll: [],
      isLoaded: false,
    }
  }

  async componentDidMount() {
    const starWarsData = await API.searchStarWarsAPI();
    const movieScroll = await API.searchStarWarsAPI(starWarsData.films)

    this.setState({
        starWarsDirectory: starWarsData,
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
