export const favoriteCharacter = (characterId) => ({
  type: "FAVORITE_CHARACTER",
  characterId
});

export const setCharacters = (characters) => ({
  type: "SET_CHARACTERS",
  characters
});