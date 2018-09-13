import React, { Component } from 'react';
import styled from 'styled-components';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: '',
      message: ''
    };
  }

  startTimer() {
    this.setState({ message: '', time: 60 });
    var countdown = setInterval(() => {
      this.setState(prevState => {
        return { state: prevState.time-- };
      });
      if (this.state.time === 0) {
        console.log('Times up!');
        clearInterval(countdown);
        this.setState({
          message: 'TIME IS UP!'
        });
      }
    }, 1000);
  }

  render() {
    return (
      <Wrapper>
        <button onClick={this.startTimer.bind(this)}>START</button>
        <div>{this.state.time}</div>
        <div>{this.state.message}</div>
      </Wrapper>
    );
  }
}

export default Timer;

const Wrapper = styled.div`
  display: flex;
  div {
    padding: 5px;
  }
`;
