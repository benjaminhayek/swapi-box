import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';
import Card from  '../Card/Card';
import Scroll from '../Scroll/Scroll';
import * as API from '../API/API';
import ErrorHandler from '../ErrorHandler/ErrorHandler';


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

  buttonHasBeenPressed = async (url, categoryName) => {
    const category = await API.makePeopleCard(url)
    const cleanedData = API.cleanPeopleData(category)

    this.setState({
      starWarsDirectory: {
        ...this.state.starWarsDirectory,
        [categoryName]: cleanedData
      }
    })
  }

  render() {
    const { movieScroll, isLoaded, starWarsDirectory } = this.state
    if(!isLoaded){
      return <div> Loading.... </div>;
    } else { 
      return (
        <ErrorHandler>
          <div 
          className="App">
            <section className='content'>
              <Button 
                buttonHasBeenPressed={this.buttonHasBeenPressed} 
                directory={starWarsDirectory} />
            </section>
              <header>
               <h1 className="title">SWAPI BOX</h1>
                <Scroll 
                  movieScroll={ movieScroll }
                  starWarsDirectory={starWarsDirectory}
                />
              </header>
          </div>
        </ErrorHandler>
      );
    }
  }
}

export default App;
