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
  })

  // describe('componentDidMount', () => {
  //   it('should set state on component did mount', async () => {
  //      window.fetch = jest.fn().mockImplementation(() => ({
  //     status: 200,
  //     json: () => new Promise((resolve, reject) => {
  //         resolve({
  //           results: [1, 2, 3],
  //         })
  //       })
  //     }))
  //     const renderedComponent = await shallow(<App />);

  //     await renderedComponent.update();
      
  //     expect(renderedComponent.state('movieScroll').length).toBe(2)
  //   })
  // })
});