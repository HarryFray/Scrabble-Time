import React, { Component } from 'react';
import styled from 'styled-components';
import WordList from './WordList';

class Player extends Component {
  handleEnter(e) {
    if (e.key === 'Enter') {
      console.log(this.input.value);
      this.input.value = '';
    }
  }

  render() {
    return (
      <Wrapper>
        <WordList />
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

export default Player;

const Wrapper = styled.div`
  flex: 1;
  background-color: white;
  margin: 10px;
`;
