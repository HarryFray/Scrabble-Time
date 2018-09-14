import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import wordInLetters from './wordChecker';

export default applyMiddleware(thunk, wordInLetters);
