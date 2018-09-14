import { combineReducers } from 'redux';
import game from './game';
import words from './words';

export default combineReducers({
  game,
  words
});
