import React from 'react';
import styled from 'styled-components';

class LevelChange extends React.PureComponent {
  state = {
    isAnswerCorrect: false,
    level: 1
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.level !== nextProps.level) {
      this.setState(prev => ({
        isAnswerCorrect: prev.level < nextProps.level,
        level: nextProps.level
      }))
    }
  }

  render () {
    return this.props.isVisible && (
      <LevelChangeWrapper isAnswerCorrect={this.state.isAnswerCorrect}>
        <span>{this.state.isAnswerCorrect ? '✔' : '🞫'}</span>
      </LevelChangeWrapper> 
    )
  }
}

const LevelChangeWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items:center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: ${props => 
    props.isAnswerCorrect ? '#27d564' : '#f01111'};

  font-size: 6rem;
  color: #e9ece5;
  z-index: 5;
`;

export default LevelChange;
