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
    const expected = Error('fetch failed')
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
    await API.makePeopleCard(expected)
    expect(window.fetch).toHaveBeenCalledWith(expected)

    expected = {
      person: {
        species: "https://swapi.co/api/people/"
      }
    }
    await API.makePeopleCard(expected)
    expect(window.fetch).toHaveBeenCalledWith(expected)

    expected = {
      person: {
        homeworld: "https://swapi.co/api/people/"
      }
    }
    await API.makePeopleCard(expected)
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })

  // it('should return an object of unresolved promises', async () => {
  //     window.fetch = jest.fn().mockImplementation(() => ({
  //     status: 500,
  //       json: () => Promise.resolve({results: []})
  //     }))
  //     const expected = { };
      

  //     await expect(wrapper.instance()makePeopleCard()).resolves.toEqual(expected)
  // })
})