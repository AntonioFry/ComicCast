import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
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

  

});