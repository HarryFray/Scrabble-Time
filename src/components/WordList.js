import React, { Component } from 'react';
import styled from 'styled-components';

class WordList extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.words.map(word => {
          return <li key={word}>{word}</li>;
        })}
      </Wrapper>
    );
  }
}

export default WordList;

const Wrapper = styled.ul``;
