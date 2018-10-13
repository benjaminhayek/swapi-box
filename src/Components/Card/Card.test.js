import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card 
                name={'meow'}
                properties={{planet: 'meow', population: 'meow', species: 'meow'}}/>);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});