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