import { generateRandomLetters } from '../utils/gameLogic';
export const NEW_GAME = 'NEW_GAME';
export const GAME_TOGGLE = 'GAME_TOGGLE';

export function newGame(letters) {
  return {
    type: NEW_GAME,
    game: letters
  };
}

function gameToggle() {
  return {
    type: GAME_TOGGLE
  };
}

export function handleNewGame(goal) {
  return dispatch => {
    dispatch(newGame(generateRandomLetters()));
  };
}
