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

  // it('should set state if theres an error', () => {
  //   const spy = spyOn(ErrorHandler.prototype, 'componentDidCatch')
  //   mount(<ErrorHandler><App /></ErrorHandler>)

  //   expect(() => { new ErrorHandler(); }).toThrowError('Ya gots an error');
  // });

});