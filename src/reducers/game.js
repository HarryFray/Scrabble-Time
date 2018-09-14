import { NEW_GAME } from '../actions/game';

export default function game(state = [], action) {
  switch (action.type) {
    case NEW_GAME:
      return action.game;
    default:
      return state;
  }
}
