import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ErrorHandler from './ErrorHandler'

describe('ErrorHandler', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorHandler />);
  });
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});