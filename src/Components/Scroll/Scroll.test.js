import Scroll from './Scroll';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Route } from 'react-router-dom';

describe('Scroll', () => {
  let wrapper;
  let favoriteACard = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Scroll 
                        movieScroll={[1, 2, 3, 4, 5, 7]}
                        starWarsDirectory={[{people: [{name: 'stupid',properties: {}}]}]}
                        stateOfButtons={{'people': 'meow'}}
                        favoriteACard={favoriteACard}/>);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})