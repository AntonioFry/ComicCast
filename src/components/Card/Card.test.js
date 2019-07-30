import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    wrapper = shallow(<Card />)
    props = {
      id: 1,
      name: 'man person',
      image: 'someimage.jpg'
    }
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})