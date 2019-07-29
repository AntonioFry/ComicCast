export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULT":
      return action.search;
  
    default:
      return state;
  }
}