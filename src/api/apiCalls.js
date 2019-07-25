export const getCharacter = async (id) => {
  try { 
    const response = await fetch(`https://www.superheroapi.com/api.php/1983143645120471/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error('Failed to fetch character');
  }
}