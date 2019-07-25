export const getCharacter = async (id) => {
  try { 
    const response = await fetch(`https://www.superheroapi.com/api.php/1983143645120471/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Failed to fetch character');
  }
}

export const getSearchResults = async (search) => {
  try {
    const response = await fetch(`https://www.superheroapi.com/api.php/1983143645120471/search/${search}`);
    const result = await response.json();
    return result.results; 
  } catch (error) {
    throw new Error('Either there were no matching results, or failed to fetch');
  }
}