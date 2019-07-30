import { charactersReducer } from './charactersReducer';

describe('charactersReducer', () => {
  it('should return initial state', () => {
    const action = {
      type: "",
      characters: [{ name: 'person' }]
    };
    const expected = [];
    const result = charactersReducer([], action);
    expect(result).toEqual(expected);
  })

  it('should return the state with character', () => {
    const action = {
      type: "SET_CHARACTERS",
      characters: [{ name: 'person' }]
    };
    const expected = [{ name: 'person' }];
    const result = charactersReducer([], action);
    expect(result).toEqual(expected);
  })
})