import Scroll from './Scroll';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('Scroll', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Scroll 
                        movieScroll={[1, 2, 3, 4, 5, 7]}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})