import React from 'react';
import styled from 'styled-components';
import { GAME_IN_PROCESS, GAME_END } from '../../actionTypes';

const GameControl = ({ timeLine, startGame, className, level }) => {
  return timeLine !== GAME_IN_PROCESS && (
    <section className={className}>
      {timeLine !== GAME_END 
         ? <button onClick={startGame}>press to Start</button>
         : <div>GAME OVER<br/> Your level is: {level}</div>
      }
    </section> 
  )
};

export default styled(GameControl)`
  display: flex;
  align-items: center;
  position: absolute;
  height: 300px;
  width: 100%;
  background-color: #b3c2bff0;

  button, div {
    margin: 0 auto;
    font-size: 21px;
    text-transform: uppercase;
    padding: 15px;
    background-color: #3b3a36;
    color: #e9ece5;
    border: none;
    cursor: pointer;
  }

  div {
    padding: 40px;
    font-weight: 900;
  }
`;
