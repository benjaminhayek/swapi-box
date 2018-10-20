import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer
                    starWarsDirectory={[{people: [{name: 'stupid',properties: {}}]}]}
                    stateOfButtons={{'people': 'meow'}}/>);
  });
  it('should have cards be an array', () => {
    
  })
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should check the conditional for a when a object is passed in', () => {
    expect(wrapper.instance())
  })
});