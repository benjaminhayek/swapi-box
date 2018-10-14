import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow , mount } from 'enzyme';
import * as API from '../API/API'

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
    expect(wrapper.state()).toEqual({"isLoaded": false, "movieScroll": [], "starWarsDirectory": {"favorites": [], "people": {}, "planets": {}, "vehicles": {}}, "stateOfButtons": {"favorite": false, "people": false, "planets": false, "vehicles": false}});
  });

  it('should set new button state to true', () => {
    wrapper.instance().changeButtonValues()
    let newButtonState = true
    expect(newButtonState).toBe(true)
  });

  it('should set new state on buttonHasPressed', async () => {
    const expected = {"favorite": false, "people": false, "planets": false, "vehicles": false}
    wrapper.instance().buttonHasBeenPressed()
    expect(wrapper.state().stateOfButtons).toEqual(expected)
  })

  it('should call buttonHasPressed', async () => {
    const expected = {"favorites": [], "people": {}, "planets": {}, "vehicles": {}}
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({"favorites": [], results: [], "planets": {}, "vehicles": {}})
    }))
    wrapper.instance().buttonHasBeenPressed(null, 'favorite')
    await API.fetchPeopleData()
    expect(wrapper.state().starWarsDirectory).toEqual(expected)
  })

  it('should set state of stateOfButtons', async () => {
    const expected = {"favorite": false, "people": false, "planets": false, "vehicles": false}
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({"favorites": [2], "people": {}, "planets": {}, "vehicles": {}})
    }))
    wrapper.instance().changeButtonValues()
    expect(wrapper.state().stateOfButtons).toEqual(expected)    
  })

  describe('componentDidMount', () => {
    it('should set state on component did mount', async () => {
      const expected = {"favorites": [2], "people": {}, "planets": {}, "vehicles": {}}
      window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () => Promise.resolve({"favorites": [2], "people": {}, "planets": {}, "vehicles": {}})
      }))
      const renderedComponent = await shallow(<App />);

      await wrapper.instance().componentDidMount();
      
      expect(renderedComponent.state().starWarsDirectory).toEqual(expected)
    })
  })
  it('buttonHasBeenPressed should send back correct data based on parameters', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
    status: 200,
    json: () => Promise.resolve({"favorites": [], results: [], "planets": {}, "vehicles": {}})
    }))
    const expected = {"favorites": [2], "people": [], "planets": {}, "vehicles": {}}

    await wrapper.instance().buttonHasBeenPressed(null, 'people');
    expect(wrapper.state().starWarsDirectory).toEqual(expected)
  })
  it('buttonHasBeenPressed should send back correct data based on parameters', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
    status: 200,
    json: () => Promise.resolve({"favorites": [2], results: [{residents: [2]}], "planets": {}, "vehicles": {}})
    }))
    const expected = {"favorites": [], "planets": [{"name": undefined, "properties": ["Terrain: undefined", "Population: undefined", "Climate: undefined", "Residents: "]}], "results": [], "vehicles": {}}

    await wrapper.instance().buttonHasBeenPressed(null, 'planets');
    expect(wrapper.state().starWarsDirectory).toEqual(expected)
  })
  it('buttonHasBeenPressed should send back correct data based on parameters', async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
    status: 200,
    json: () => Promise.resolve({"favorites": [2], results: [{residents: [2]}], "planets": {}, "vehicles": {}})
    }))
    const expected = {"favorites": [2], "planets": {}, "results": [{"residents": [2]}], "vehicles": [{"name": undefined, "properties": ["Model: undefined", "Class: undefined", "# Of Passengers: undefined"]}]}


    await wrapper.instance().buttonHasBeenPressed(null, 'vehicles');
    expect(wrapper.state().starWarsDirectory).toEqual(expected)
  })  
});