import * as API from '../API/API';

describe('API', () => {
  it('should be called with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({results: []})
    }))
    const expected = "https://swapi.co/api/"

    await API.searchStarWarsAPI();

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })
  it('should return an object if the status is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => Promise.resolve({results: []})
      }))
    
    const result = await API.searchStarWarsAPI()
    expect(API.searchStarWarsAPI()).resolves.toEqual({results: []})
    })

  it('throw an error if status is not ok', async () => {
    const expected = Error('Problem with fetch')
      window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
        json: () => Promise.resolve({results: []})
      }))
    await expect(API.searchStarWarsAPI()).rejects.toEqual(expected)
    })

  it('should call fetch with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({results: []})
    }))
    let expected = "https://swapi.co/api/people/"
    await API.fetchPeopleData(expected)
    expect(window.fetch).toHaveBeenCalledWith(expected)

    expected = {
      person: {
        species: "https://swapi.co/api/people/"
      }
    }
    await API.fetchPeopleData(expected)
    expect(window.fetch).toHaveBeenCalledWith(expected)

    expected = {
      person: {
        homeworld: "https://swapi.co/api/people/"
      }
    }
    await API.fetchPeopleData(expected)
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  it('should handle different urls', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({results: []})
    }))
    const expected = Promise.resolve()
    const thing = await API.fetchPeopleData()
    expect(API.fetchPeopleData()).toEqual(expected)
  }) 

  it('should return an object with the proper values', () => {
    const parameter = [{properName: 'name', name: 'name', population: 'population', species: {name: 'name'}}];
    const functionCall = API.makePeopleCard(parameter)
    const expected = [{"favorited": false, "id": "0people", "name": "name", "properties": ["Planet: name", "Population: population", "Species: name"]}]

    expect(functionCall).toEqual(expected)
  })

  it('should return an object with the proper values', () => {
    const parameter = [{name: 'name', terrain: 'terrain', population: 'population', climate: 'climate', residents: [{name: 'array'}]}];
    const functionCall = API.makePlanetCard(parameter)
    const expected = [{"favorited": false, "id": "0planets", "name": "name", "properties": ["Terrain: terrain", "Population: population", "Climate: climate", "Residents: array"]}]
    expect(functionCall).toEqual(expected)
  })

  it('should return an object with the proper values', async () => {
    const parameter = [{name: 'name', model: 'model', class: 'class', passengers: 'passengers'}];
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({results: parameter})
    }))
    const functionCall = await API.fetchVehicleData(parameter)
    const expected = [{"favorited": false, "id": "0vehicles", "name": "name", "properties": ["Model: model", "Class: undefined", "# Of Passengers: passengers"]}]
    expect(functionCall).toEqual(expected)
  })

  it('should return an object with the proper values', async () => {
    let store = '[{name: Organa}]'
    const parameter = [{name: 'name', population: 'population', climate: 'climate', terrain: 'terrain', residents: []}];

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({results: parameter})
    }))

    const functionCall = await API.fetchPlanetData(parameter)
    const expected = [{"climate": "climate", "name": "name", "population": "population", "residents": [], "terrain": "terrain"}]
    expect(functionCall).toEqual(expected)
  })
  it('should return an object with the proper values', async () => {
    const parameter = [{name: 'name', population: 'population', climate: 'climate', terrain: 'terrain', residents: []}];

    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({results: parameter})
    }))

    const functionCall = await API.fetchPeopleData(parameter)
    const expected = [{"properName": "name", "results": [{"climate": "climate", "name": "name", "population": "population", "residents": [], "terrain": "terrain"}], "species": {"results": [{"climate": "climate", "name": "name", "population": "population", "residents": [], "terrain": "terrain"}]}}]

    expect(functionCall).toEqual(expected)
  })
})