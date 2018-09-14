import { ADD_WORD } from '../actions/words';
import { checkIfWordInLetters } from '../utils/gameLogic';

const wordInLetters = store => next => action => {
  let letters = store.getState().game;
  if (action.type === ADD_WORD && !checkIfWordInLetters(action.word, letters)) {
    return alert(`${action.word} is not possible`);
  } else {
    return next(action);
  }
};

export default wordInLetters;
