export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "FAVORITE_CHARACTER":
      return [...state, action.characterId];

    case "UNFAVORITE_CHARACTER":
      const favorites = state.filter(characterId => characterId !== action.characterId);
      return favorites;
      
    default:
      return state;
  }
}