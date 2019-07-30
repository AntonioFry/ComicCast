import { combineReducers } from "redux";
import { charactersReducer } from './charactersReducer';
import { searchReducer } from './searchReducer';
import { favoriteReducer } from './favoriteReducer';

export const rootReducer = combineReducers({
  allCharacters: charactersReducer,
  search: searchReducer,
  favorites: favoriteReducer
})