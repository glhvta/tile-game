import React from 'react';
import styled from 'styled-components';
import { secondsInGame } from '../../constants'
import { GAME_IN_PROCESS } from '../../actionTypes';

class ModalFrame extends React.Component {
  state = {
    secondsLeft: secondsInGame,
  }

  componentDidMount() {
    this.timerId = this.startTimer(); 
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  startTimer = () => {
    const id = setInterval(() => {
      this.setState(prevState => prevState.secondsLeft -= 1)
      if(this.state.secondsLeft === 0) { 
        clearInterval(id);
      }
    }, 1000);
    return id;
  }

  render() {
    const { level, timeLine } = this.props;

    return timeLine === GAME_IN_PROCESS && (
      <ModalFrameWrapper>
        <div>Level: {level}</div>
        <div>time: {this.state.secondsLeft}</div>
      </ModalFrameWrapper> 
    )
  }
}

const ModalFrameWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 20px;
  width: 100%;
  top: 0;
  box-sizing: border-box;
  color: #3b3a36;
  font-size: 1.5rem;
  text-transform: capitalize;
`;

export default ModalFrame;
