import React from 'react';
import { CharacterDetails } from './CharacterDetails';
import { shallow } from 'enzyme';

describe('CharacterDetails', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      image: '',
      overview: '',
      name: '',
      full_name: '',
      first_appearance: '',
      publisher: ''
    }
    wrapper = shallow(<CharacterDetails
      id={1}
      key={1}
      image={props.image}
      overview={props.overview}
      publisher={props.name}
      name={props.name}
      full_name={props.full_name}
      first_appearance={props.first_appearance}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});