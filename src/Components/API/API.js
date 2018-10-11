export const searchStarWarsAPI = async (url) => { 
  // debugger;
  const response = await fetch(url || "https://swapi.co/api/")

  if(response.status >= 400) {
    throw new Error('fetch failed')
  } else {
    return await response.json();
  }
}

export const makePeopleCard = async (url) => {

  const people = await searchStarWarsAPI(url);
  const unresolvedPromises = people.results.map( async (person) => {
    const species = await searchStarWarsAPI(person.species)
    const planet = await searchStarWarsAPI(person.homeworld)
    return ({species: species, properName:person.name, ...planet})
  })
  return Promise.all(unresolvedPromises)
}

export const cleanPeopleData = async (category) => {
  
}