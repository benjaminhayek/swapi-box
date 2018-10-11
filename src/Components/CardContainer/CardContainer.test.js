import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CardContainer
                    starWarsDirectory={{people: [{name: 'stupid',properties: {}}]}}/>);
  });
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});