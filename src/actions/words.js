export const ADD_WORD = 'ADD_WORD';

export function addWord(word) {
  return {
    type: ADD_WORD,
    word
  };
}
