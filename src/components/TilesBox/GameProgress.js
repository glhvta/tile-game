import React from 'react';
import styled from 'styled-components';
import { GAME_IN_PROCESS } from '../../actionTypes';

const ModalFrame = ({ level, timeLine, className }) => {
  return timeLine === GAME_IN_PROCESS && (
    <section className={className}>
      <div>Level: {level}</div>
      <div>time</div>
    </section> 
  )
}

export default styled(ModalFrame)`
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding: 20px;
  width: 100%;
  top: 0;
  background-color: #b3c2bff0;
  box-sizing: border-box;
  color: #e9ece5;
    font-size: 1.5rem;
`