import { generateRandomLetters } from '../utils/gameLogic';
export const NEW_GAME = 'NEW_GAME';

export function newGame(letters) {
  return {
    type: NEW_GAME,
    game: letters
  };
}

export function handleNewGame(goal) {
  return dispatch => {
    dispatch(newGame(generateRandomLetters()));
  };
}
