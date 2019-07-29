import React from 'react';
import { SearchResults } from './SearchResults';
import { shallow } from 'enzyme';

describe('SearchResults', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      allCharacters: [
        { name: 'guy', id: 1, image: 'image.jpg', key: 1 },
        { name: 'peep', id: 2, image: 'image.jpg', key: 2 },
        { name: 'gal', id: 3, image: 'image.jpg', key: 3 },
        { name: 'dude', id: 4, image: 'image.jpg', key: 4 }
      ]
    } 
    wrapper = shallow(<SearchResults allCharacters={props.allCharacters} search=""/>)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

});