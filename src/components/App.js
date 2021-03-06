import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Player from './Player';
import Timer from './Timer';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Wrapper>
        <Timer />
        <Nav>{this.props.letters.join('')}</Nav>
        <Game>
          <Player />
          <Player />
        </Game>
      </Wrapper>
    );
  }
}

export default connect(state => ({
  letters: state.game
}))(App);

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
