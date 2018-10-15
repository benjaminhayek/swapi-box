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
  const unresolvedPromises = planets.results.map( async planet => {
    const planetResidents = await Promise.all(planet.residents.map(async resident => {
        return await searchStarWarsAPI(resident) 
      }))
    const planetCard = {
      name: planet.name,
      population: planet.population,
      climate: planet.climate,
      terrain: planet.terrain,
      residents: planetResidents
      }
    
    return planetCard
  })

  return Promise.all(unresolvedPromises);
}

export const fetchVehicleData = async url => {
  const vehicles = await searchStarWarsAPI(url);
  const vehicleData = vehicles.results.map(vehicle => {
    return {
      name: vehicle.name,
      properties: [
        `Model: ${vehicle.model}`,
        `Class: ${vehicle.vehicle_class}`,
        `# Of Passengers: ${vehicle.passengers}`
      ]
    } 
  })
  return vehicleData
}

export const makePlanetCard = category => {
  const planetCard = category.map(item => {
    return {
      name: item.name,
      properties: [
        `Terrain: ${item.terrain}`,
        `Population: ${item.population}`,
        `Climate: ${item.climate}`,
        `Residents: ${item.residents.map(resident => {
          return resident.name
        })}`
      ]
    }
  })
  return planetCard
}

export const makePeopleCard = category => {
  const personCard = category.map(item => {
    return {
      name: item.properName,
      properties: [
        `Planet: ${item.name}`,
        `Population: ${item.population}`,
        `Species: ${item.species.name}`
      ]
    }
  })
  return personCard
}

export const putDataIntoStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export const checkLocalStorage = key => {
  const retrievedJSON = localStorage.getItem(key);
  console.log(key)
  const newData = JSON.parse(retrievedJSON)
  return newData
}