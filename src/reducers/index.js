import { combineReducers } from 'redux';
import game from './game';
import words from './words';
import gameInSession from './gameOn';

export default combineReducers({
  game,
  words,
  gameInSession
});
