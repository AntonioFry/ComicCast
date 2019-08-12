export const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CHARACTERS":
      return action.characters;

    case "CHANGE_FAVORITE_STATE":
      const allCharacters = state.map(character => {
        if (character.id === action.characterId) {
          character.favorite = !character.favorite
        }
        return character;
      });
      return allCharacters;
    
    default:
      return state;
  }
}