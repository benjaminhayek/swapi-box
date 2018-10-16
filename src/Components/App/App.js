import React, { Component } from 'react';
import './App.css';
import Button from '../Button/Button';
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
    let movieScrollData;
    const URLs = await API.searchStarWarsAPI();
    if(API.checkLocalStorage('movieScroll')) {
      movieScrollData = API.checkLocalStorage('movieScroll')
    } else {
      const resolvedData = await API.searchStarWarsAPI(URLs.films);
      movieScrollData = resolvedData.results
     API.putDataIntoStorage('movieScroll', movieScrollData)
    }
    this.setState({
        starWarsDirectory: {...this.state.starWarsDirectory, ...URLs},
        movieScroll: movieScrollData, 
        isLoaded: true
    })
  }

  buttonHasBeenPressed = async (url, categoryName) => {
    let newCards;
    if(API.checkLocalStorage(categoryName)){
      newCards = API.checkLocalStorage(categoryName)
    } else if(categoryName === 'favorites'){
      newCards = this.state.starWarsDirectory.favorites
    }else if (categoryName === 'people') {
      const category = await API.fetchPeopleData(url)
      newCards = API.makePeopleCard(category)
    }else if (categoryName === 'planets') {
      const fetchedPlanet = await API.fetchPlanetData(url);
      newCards = await API.makePlanetCard(fetchedPlanet);
    }else if (categoryName === 'vehicles') {
      newCards = await API.fetchVehicleData(url);   
    }
    API.putDataIntoStorage(categoryName, newCards)
    this.setState({
      stateOfButtons: this.changeButtonValues(categoryName),
      starWarsDirectory: {
        ...this.state.starWarsDirectory,
        [categoryName]: newCards,
      }
    }) 
  }

  changeButtonValues = (buttonName) => {
    let newButtonState = {}
    Object.keys(this.state.stateOfButtons).forEach(button => {
      if(button === buttonName) {
        newButtonState[button] = true
      } else {
        newButtonState[button] = false
      }
    }) 
    return newButtonState
  }

  favoriteACard = (id) => {
    let newCards;
    const category = [...id].splice(1, 10).join('');
    const checkingFavorites = this.state.starWarsDirectory.favorites.filter(card => {
      return card.id !== id
    });
    const selectedCard = this.state.starWarsDirectory[category].filter(item => {
      return item.id === id
    })
    if(this.state.starWarsDirectory.favorites.includes(...selectedCard)) {
      newCards = checkingFavorites
    } else {
      newCards = [...this.state.starWarsDirectory.favorites, ...selectedCard];
    } 
    API.putDataIntoStorage('favorites', newCards)
    this.setState({
      starWarsDirectory:{
        ...this.state.starWarsDirectory,
        favorites: newCards
      }
    })
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
                  movieScroll={movieScroll}
                  starWarsDirectory={starWarsDirectory}
                  stateOfButtons={stateOfButtons}
                  favoriteACard={this.favoriteACard}
                />
              </header>
          </div>
        </ErrorHandler>
      );
    }
  }
}

export default App;

