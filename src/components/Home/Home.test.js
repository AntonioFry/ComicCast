import React from 'react'
import { Home } from './Home'
import { shallow } from 'enzyme';

describe('Home', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  })
})