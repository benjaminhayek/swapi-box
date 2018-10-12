import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ErrorHandler from './ErrorHandler';
import App from '../App/App';

describe('ErrorHandler', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorHandler />);
  });
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should set state if theres an error', () => {
    const expected = true 
    wrapper.instance().componentDidCatch()
    expect(wrapper.state().hasError).toEqual(expected)
  });

});