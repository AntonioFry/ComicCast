import React from 'react';
import { Search } from './Search';
import { shallow } from 'enzyme';
import { setSearchResult } from '../../actions';
import { mapDispatchToProps } from './Search';

describe('Search', () => {

  describe("Seacrh component", () => {
    let wrapper;
    let e;
  
    beforeEach(() => {
      wrapper = shallow(<Search />)
      e = {
        target: {
          name: 'search',
          value: 'something'
        }
      }
    });
  
    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should change state when handleChange is invoked', () => {
      wrapper.instance().handleChange(e);
      expect(wrapper.state('search')).toEqual('something');
    })
  
    it('should invoke handleChange on keyUp in the input', () => {
      wrapper.instance().handleChange = jest.fn();
      wrapper.find('.character-search-input').simulate('change', { value: 'something' });
      expect(wrapper.instance().handleChange).toHaveBeenCalled();
    });
  
    it('should invoke handleSubmit when handleChange is invoked', async () => {
      wrapper.instance().handleSubmit = jest.fn();
      await wrapper.instance().handleChange(e);
      expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = setSearchResult("search")
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.setSearchResult("search");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});