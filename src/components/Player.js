import React, { Component } from 'react';
import styled from 'styled-components';
import WordList from './WordList';
import { connect } from 'react-redux';
import { addWord } from '../actions/words';

class Player extends Component {
  handleEnter(e) {
    if (e.key === 'Enter') {
      console.log(this.input.value);
      this.props.dispatch(addWord(this.input.value));
      this.input.value = '';
    }
  }

  render() {
    return (
      <Wrapper>
        <WordList words={this.props.words} />
        <input
          type="text"
          placeholder="Word"
          ref={input => (this.input = input)}
          onKeyPress={this.handleEnter.bind(this)}
        />
      </Wrapper>
    );
  }
}

export default connect(state => ({
  words: state.words
}))(Player);

const Wrapper = styled.div`
  flex: 1;
  background-color: white;
  margin: 10px;
`;
