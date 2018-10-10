export const getMovieScroll = async () => { 
  const response = await fetch("https://swapi.co/api/films/")

  if(response.status >= 400) {
    throw new Error('fetch failed')
  } else {
    return await response.json();
  }
}