import { combineReducers } from "redux";
import { charactersReducer } from './charactersReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
  allCharacters: charactersReducer,
  search: searchReducer,
})