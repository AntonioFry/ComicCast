import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { mapStateToProps, mapDispatchToProps } from './App';
import { setCharacters } from '../../actions';

describe('App', () => {

  describe("App component", () => {
    let wrapper;
    let props;
  
    beforeEach(() => {
      props = {
        allCharacters: [{}, {}]
      }
      wrapper = shallow(<App allCharacters={props.allCharacters} />)
    });
  
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it.skip('should only set state of error if componentDidMount catches error', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
      wrapper.instance().componentDidMount();
      expect(wrapper.state('error')).toEqual("failed to fetch characters")
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

  describe("mapDispatchToProps", () => {
    it('calls dispatch with setCharacters action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setCharacters([{ name: 'Spider-Man' }, { name: 'Thor' }])
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setCharacters([{ name: 'Spider-Man' }, { name: 'Thor' }])
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});