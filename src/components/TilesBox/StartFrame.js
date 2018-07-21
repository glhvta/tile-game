import React from 'react';
import styled from 'styled-components';

const StartFrame = ({ startGame, className }) => {
  return (
    <section className={className}>
      <button onClick={startGame}>press to Start</button>
    </section> 
  )
}

export default styled(StartFrame)`
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
`
