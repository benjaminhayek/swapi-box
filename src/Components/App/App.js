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
      stateOfButtons: {
        favorite: false,
        vehicles: false,
        planets: false,
        people: false
      }
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
    if(categoryName === 'favorite'){
      return this.setState({stateOfButtons: this.changeButtonValues(categoryName)})
    }else if (categoryName === 'people') {
      const category = await API.fetchPeopleData(url)
      const cleanedData = API.makePeopleCard(category)
      this.setState({
        stateOfButtons: this.changeButtonValues(categoryName),
        starWarsDirectory: {
          ...this.state.starWarsDirectory,
          [categoryName]: cleanedData
        }
      })
    }else if (categoryName === 'planets') {
      const fetchedPlanet = await API.fetchPlanetData(url);
      const planetCard = await API.makePlanetCard(fetchedPlanet);
      this.setState({
        stateOfButtons: this.changeButtonValues(categoryName),
        starWarsDirectory: {
          ...this.state.starWarsDirectory,
          [categoryName]: planetCard,
        }
      })
    }
  }

  changeButtonValues = (buttonName) => {
    let newButtonState = {}
    const { stateOfButtons } = this.state
    Object.keys(this.state.stateOfButtons).forEach(button => {
      const newValue = stateOfButtons[button]

      if(button === buttonName) {
        newButtonState[button] = true
      } else {
        newButtonState[button] = false
      }
    })
    
    return newButtonState
  }

  render() {
    const { movieScroll, isLoaded, starWarsDirectory, stateOfButtons} = this.state
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
                directory={starWarsDirectory}
                selected={stateOfButtons}
              />
            </section>
              <header>
               <h1 className="title">SWAPI BOX</h1>
                <Scroll 
                  movieScroll={ movieScroll }
                  starWarsDirectory={starWarsDirectory}
                  stateOfButtons={ stateOfButtons }
                />
              </header>
          </div>
        </ErrorHandler>
      );
    }
  }
}

export default App;
