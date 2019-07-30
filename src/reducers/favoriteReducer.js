export const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case "FAVORITE_CHARACTER":
      return [...state, action.characterId];

    // case "UNFAVORITE_CHARACTER":
      
  
    default:
      return state;
  }
}