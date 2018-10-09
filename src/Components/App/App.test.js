import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow , mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state()).toEqual({"movieScroll": [], "isLoaded": false});
  });
  it('should have change state on fetch call', () => {
    const mockFetch = (data) => jest.fn().mockImplementation(() => {
      Promise.resolve({
        ok: true,
        json: () => {data}
      })
    });
    global.fetch = mockFetch({results: [1]})
    expect(wrapper.state()).toEqual({'movieScroll': [1]})
  })
});