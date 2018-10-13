export const searchStarWarsAPI = async (url) => { 
  const response = await fetch(url || "https://swapi.co/api/")

  if(response.status >= 400) {
    throw new Error('fetch failed')
  } else {
    return await response.json();
  }
}

export const fetchPeopleData = async (url) => {

  const people = await searchStarWarsAPI(url);
  const unresolvedPromises = people.results.map( async (person) => {
    const species = await searchStarWarsAPI(person.species)
    const planet = await searchStarWarsAPI(person.homeworld)
    return ({species: species, properName:person.name, ...planet})
  })
  return Promise.all(unresolvedPromises)
}

export const fetchPlanetData = async url => {
  const planets = await searchStarWarsAPI(url);
  const unresolvedPromises = planets.results.map( planet => {
    const planetCard = {
      name: planet.name,
      population: planet.population,
      climate: planet.climate,
      terrain: planet.terrain,
      residents: Promise.all(planet.residents.map(async resident => {
        return await searchStarWarsAPI(resident)
      }))
    }
    return planetCard
  })

  return unresolvedPromises;
}

export const makePlanetCard

export const makePeopleCard = category => {
  const personCard = category.map(item => {
    return {
      name: item.properName,
      properties: {
        planet: item.name,
        population: item.population,
        species: item.species.name
      }
    }
  })
  
  return personCard
}


