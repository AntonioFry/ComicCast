import { cleaner } from './cleaner';

export const getCharacters = async () => {
  try { 
    const response = await fetch(`https://api.sheety.co/50e47574-a7cb-4e95-8550-1975896a4e3e`);
    console.log(response)
    const result = await response.json();
    const cleanedResult = await cleaner(result);
    console.log(cleanedResult);
    return cleanedResult;
  } catch (error) {
    throw new Error('Failed to fetch characters');
  }
}

// export const getSearchResults = async (search) => {
//   try {
//     const response = await fetch(`https://www.superheroapi.com/api.php/1983143645120471/search/${search}`);
//     const result = await response.json();
//     return result.results; 
//   } catch (error) {
//     throw new Error('Either there were no matching results, or failed to fetch');
//   }
// }