import { ADD_WORD } from '../actions/words';

export default function words(state = [], action) {
  switch (action.type) {
    case ADD_WORD:
      return state.concat([action.word]);
    default:
      return state;
  }
}
