import { searchReducer } from './searchReducer';

describe('searchReducer', () => {
  it('should return initial state', () => {
    const action = {
      type: "",
      search: "Spider-Man"
    };
    const expected = "";
    const result = searchReducer("", action);
    expect(result).toEqual(expected);
  });

  it('should set state when type is SET_SEARCH_RESULT', () => {
    const action = {
      type: "SET_SEARCH_RESULT",
      search: "Spider-Man"
    };
    const expected = "Spider-Man";
    const result = searchReducer("", action);
    expect(result).toEqual(expected);
  });
})