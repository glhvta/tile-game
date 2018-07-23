import React from 'react';
import styled from 'styled-components';
import { GAME_IN_PROCESS } from '../../actionTypes';

const GameControlModal = ({ timeLine, startGame, className }) => {
  return timeLine !== GAME_IN_PROCESS && (
    <section className={className}>
      <button onClick={startGame}>press to Start</button>
    </section> 
  )
};

export default styled(GameControlModal)`
  display: flex;
  align-items: center;
  position: absolute;
  height: 300px;
  width: 100%;
  background-color: #b3c2bff0;

  button {
    margin: 0 auto;
    font-size: 21px;
    text-transform: uppercase;
    padding: 15px;
    background-color: #3b3a36;
    color: #e9ece5;
    border: none;
    cursor: pointer;
  }
`;
