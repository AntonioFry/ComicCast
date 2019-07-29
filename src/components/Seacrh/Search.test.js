import React from 'react';
import { Search } from './Search';
import { shallow } from 'enzyme';

describe('Search', () => {
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

  it
});