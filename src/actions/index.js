export const favoriteCharacter = (characterId) => ({
  type: "FAVORITE_CHARACTER",
  characterId
});

export const  unfavoriteCharacter = (characterId) => ({
  type: "UNFAVORITE_CHARACTER",
  characterId
})

export const setCharacters = (characters) => ({
  type: "SET_CHARACTERS",
  characters
});

export const setSearchResult = (search) => ({
  type: "SET_SEARCH_RESULT",
  search
});

export const changeFavoriteState = (characterId) => ({
  type: "CHANGE_FAVORITE_STATE",
  characterId
})