import { GAME_TOGGLE } from '../actions/gameOn';

export default function game(state = false, action) {
  switch (action.type) {
    case GAME_TOGGLE:
      return !state;
    default:
      return state;
  }
}
