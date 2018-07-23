import React from 'react';
import styled from 'styled-components';
import { GAME_IN_PROCESS } from '../../actionTypes';

class ModalFrame extends React.Component {
  constructor() {
    super()
    this.state = {
      secondsLeft: 30,
    }

    this.startTimer();
  }

  startTimer = () => {
    const id = setInterval(() => {
      this.setState(prevState => prevState.secondsLeft -= 1)
      if(this.state.secondsLeft === 0) { 
        clearInterval(id);
      }
    }, 1000)
  }

  render() {
    const { level } = this.props;

    return (
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
