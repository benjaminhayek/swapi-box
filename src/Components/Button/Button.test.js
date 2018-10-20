import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from './Button';
import { NavLink } from 'react-router-dom';

describe('Button', () => {
  let wrapper;
  let buttonHasBeenPressed = jest.fn()
  let stateOfButtons = {favorites: false, people: false, vehicles: false, planets: false}

  beforeEach(() => {
    wrapper = shallow(<NavLink directory={{'people': 'people'}} buttonHasBeenPressed={buttonHasBeenPressed} selected={stateOfButtons} />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call buttonHasBeenPressed function on click', () => {
    wrapper.find('.selected.favorites').simulate('click');
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
    wrapper = shallow(<NavLink directory={{'people': 'people'}} buttonHasBeenPressed={buttonHasBeenPressed} selected={{favorites: true}} />)
    expect(wrapper.find('.selected').length).toEqual(1)
    wrapper = shallow(<NavLink directory={{'people': 'people'}} buttonHasBeenPressed={buttonHasBeenPressed} selected={{vehicles: true}} />)
    expect(wrapper.find('.selected').length).toEqual(1)
    wrapper = shallow(<NavLink directory={{'people': 'people'}} buttonHasBeenPressed={buttonHasBeenPressed} selected={{people: true}} />)
    expect(wrapper.find('.selected').length).toEqual(1)
    wrapper = shallow(<NavLink directory={{'people': 'people'}} buttonHasBeenPressed={buttonHasBeenPressed} selected={{planets: true}} />)
    expect(wrapper.find('.selected').length).toEqual(1)        
  })
});