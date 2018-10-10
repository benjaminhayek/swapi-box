import { getMovieScroll } from './API';


describe('API', () => {
  it('should return an object if the status is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => Promise.resolve({results: []})
      }))
    

    expect(getMovieScroll()).resolves.toEqual({results: []})
    })
  })