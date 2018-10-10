import { searchStarWarsAPI } from './API';


describe('API', () => {
  it('should be called with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({results: []})
    }))
    const expected = "https://swapi.co/api/"

    await searchStarWarsAPI();

    expect(window.fetch).toHaveBeenCalledWith(expected)
  })
  it('should return an object if the status is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => Promise.resolve({results: []})
      }))
    
    const result = await searchStarWarsAPI()
    expect(searchStarWarsAPI()).resolves.toEqual({results: []})
    })

  it('throw an error if status is not ok', async () => {
    const expected = Error('fetch failed')
      window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
        json: () => Promise.resolve({results: []})
      }))
    await expect(searchStarWarsAPI()).rejects.toEqual(expected)
    })
  })