import React from 'react';
import { CharacterCarousel } from './CharacterCarousel';
import { shallow } from 'enzyme';

describe('CharacterCarousel', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      allCharacters: [{}, {}, {}, {}, {}]
    }
    wrapper = shallow(<CharacterCarousel allCharacters={props.allCharacters}/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke getRandomCharcaters when componentDidMount is called', () => {
    wrapper.instance().getRandomCharacters = jest.fn()
    wrapper.instance().componentDidMount()
    expect(wrapper.instance().getRandomCharacters).toHaveBeenCalled();
  });

  it('should change state when getRandomCharacters', () => {
    wrapper.instance().getRandomCharacters();
    expect(wrapper.state('randomCharacters').length).toEqual(5)
  });
});