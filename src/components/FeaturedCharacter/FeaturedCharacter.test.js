import React from 'react';
import { FeaturedCharacter } from './FeaturedCharacter';
import { shallow } from 'enzyme';
import { mapStateToProps } from './FeaturedCharacter';

describe('FeaturedCharacter', () => {

  describe('FeaturedCharacter component', () => {
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
  });

  describe('mapStateToProps', () => {

    it('should return an object with all characters', () => {
      const mockStore = {
        allCharacters: [{}, {}, {}, {}, {}],
      }

      const expected = {
        allCharacters: [{}, {}, {}, {}, {}],
      }

      const mappedProps = mapStateToProps(mockStore);

      expect(mappedProps).toEqual(expected);
    });
  });
})