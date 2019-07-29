import React from 'react';
import { FeaturedCharacter } from './FeaturedCharacter';
import { shallow } from 'enzyme';

describe('FeaturedCharacter', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      allCharacters: [
        { name: 'person', full_name: 'person person', overview: 'yeah' },
        { name: 'person', full_name: 'person person', overview: 'yeah' },
        { name: 'person', full_name: 'person person', overview: 'yeah' }
      ]
    };
    wrapper = shallow(<FeaturedCharacter allCharacters={props.allCharacters} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})