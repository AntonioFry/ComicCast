import * as actions from './index';

describe('actions', () => {
  it('should return a type and action when setCharacters is called', () => {
    const parameter = [{ name: 'Jeff' }, { name: 'guy' }];
    const expected = {
      type: "SET_CHARACTERS",
      characters: [{name: 'Jeff'}, {name: 'guy'}]
    }
    const result = actions.setCharacters(parameter);

    expect(result).toEqual(expected);
  });

  it('should return a type and action when setSearchResult is called', () => {
    const parameter = "Spider-Man";
    const expected = {
      type: "SET_SEARCH_RESULT",
      search: "Spider-Man"
    }
    const result = actions.setSearchResult(parameter);

    expect(result).toEqual(expected);
  });
})