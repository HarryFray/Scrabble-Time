import React, { Component } from 'react';
import styled from 'styled-components';
import Player from './Player';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Timer />
        <Nav />
        <Game>
          <Player />
          <Player />
        </Game>
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  height: 900px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  height: 200px;
  background-color: orange;
`;

const Game = styled.div`
  flex: 1;
  background-color: green;
  display: flex;
`;
