import { getMovieScroll } from './API';


describe('API', () => {
  it('should return an object if the status is okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
        status: 200,
        json: () => Promise.resolve({results: []})
      }))
    
    const result = await getMovieScroll()
    expect(getMovieScroll()).resolves.toEqual({results: []})
    })

  it('throw an error if status is not ok', async () => {
    const expected = Error('fetch failed')
      window.fetch = jest.fn().mockImplementation(() => ({
      status: 500,
        json: () => Promise.resolve({results: []})
      }))
    await expect(getMovieScroll()).rejects.toEqual(expected)
    })
  })