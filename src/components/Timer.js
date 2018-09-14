import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { handleNewGame } from '../actions/game';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      timerIsRunning: false,
      message: ''
    };
  }

  handleTimerStart() {
    if (!this.state.timerIsRunning) {
      this.props.dispatch(handleNewGame());
      this.setState({ message: '', time: 10, timerIsRunning: true });
      var countdown = setInterval(() => {
        this.setState(prevState => {
          return { state: prevState.time-- };
        });
        if (this.state.time === 0) {
          clearInterval(countdown);
          console.log('from timer', this.props);
          this.setState({
            message: 'TIME IS UP!',
            timerIsRunning: false,
            time: ''
          });
        }
      }, 1000);
    }
  }

  render() {
    return (
      <Wrapper>
        <button onClick={this.handleTimerStart.bind(this)}>NEW GAME</button>
        <div>{this.state.time}</div>
        <div>{this.state.message}</div>
      </Wrapper>
    );
  }
}

export default connect(state => ({
  state: state
}))(Timer);

const Wrapper = styled.div`
  display: flex;
  div {
    padding: 5px;
  }
`;
