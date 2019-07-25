export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "FAVORITE_CHARACTER":
      return [...state, action.characterId];
  
    default:
      return state;
  }
}