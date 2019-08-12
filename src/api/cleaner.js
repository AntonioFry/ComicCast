export const cleaner = (allCharacters) => {
  return allCharacters.map(character => {
    character.favorite = false;
    return character;
  })
} 