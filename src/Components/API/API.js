export const searchStarWarsAPI = async (url) => { 
  const response = await fetch(url || "https://swapi.co/api/")

  if(response.status >= 400) {
    throw new Error('fetch failed')
  } else {
    return await response.json();
  }
}

export const makePeopleCard = async (url) => {
  const people = await searchStarWarsAPI(url);
  const species = await searchStarWarsAPI(people.results.species)
  const planet = await searchStarWarsAPI(people.results.planet)
}