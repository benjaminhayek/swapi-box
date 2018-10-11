import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from './Button'

describe('Button', () => {
  let wrapper;
  let buttonHasBeenPressed = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Button directory={{'people': 'people'}} buttonHasBeenPressed={buttonHasBeenPressed}/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call buttonHasBeenPressed function on click', () => {
    window.console.log = jest.fn();
    wrapper.find('.favorites-btn').simulate('click');
    expect(console.log).toBeCalled();
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

});