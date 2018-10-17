import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  let wrapper;
  const favoriteACard = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Card 
                name={'meow'}
                properties={['meow','meow','meow', 'meow']}
                favoriteACard={favoriteACard}
                favorited={true}
                />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call favorite a card on click', () => {
    wrapper.find('button').simulate('click')

    expect(favoriteACard).toBeCalled()
  })
  it('should toggle class based on boolean', () => {
    expect(wrapper.find('.selected').length).toEqual(1)
  })
  it('should toggle class based on boolean', () => {
    wrapper = shallow(<Card 
                        name={'meow'}
                        properties={['meow','meow','meow', 'meow']}
                        favoriteACard={favoriteACard}
                        favorited={false}
                      />)
    expect(wrapper.find('.null').length).toEqual(1)
  })
});