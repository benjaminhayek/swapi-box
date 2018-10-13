import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from './Button'

describe('Button', () => {
  let wrapper;
  let buttonHasBeenPressed = jest.fn()
  let stateOfButtons = {favorite: false, people: false, vehicles: false, planets: false}

  beforeEach(() => {
    wrapper = shallow(<Button directory={{'people': 'people'}} buttonHasBeenPressed={buttonHasBeenPressed} selected={stateOfButtons} />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call buttonHasBeenPressed function on click', () => {
    // window.console.log = jest.fn();
    wrapper.find('.favorites-btn').simulate('click');
    expect(buttonHasBeenPressed).toBeCalled();
  });

  it('should call buttonHasBeenPressed function on click', () => {
    wrapper.find('.people-btn').simulate('click');
    expect(buttonHasBeenPressed).toBeCalled();
  });

  it('should call buttonHasBeenPressed function on click', () => {
    wrapper.find('.planets-btn').simulate('click');
    expect(buttonHasBeenPressed).toBeCalled();
  });

  it('should call buttonHasBeenPressed function on click', () => {
    wrapper.find('.vehicles-btn').simulate('click');
    expect(buttonHasBeenPressed).toBeCalled();
  });
  it('should render the selected class to null if false', () => {
    expect(wrapper.find('.selected').length).toEqual(0)
  })
    it('should render the selected class to null if false', () => {
    wrapper = shallow(<Button directory={{'people': 'people'}} buttonHasBeenPressed={buttonHasBeenPressed} selected={{favorite: true}} />)
    expect(wrapper.find('.selected').length).toEqual(1)
  })
});