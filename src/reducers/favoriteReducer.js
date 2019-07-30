export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "FAVORITE_CHARACTER":
      return [...state, action.characterId];

    case "UNFAVORITE_CHARACTER":
      const idIndex = state.findIndex(id => id === action.characterId);
      state.splice(idIndex, 1);
      return state;
      
    default:
      return state;
  }
}