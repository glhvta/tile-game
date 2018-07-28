import React from 'react';
import styled from 'styled-components';

class LevelChange extends React.PureComponent {
  state = {
    isAnswerCorrect: false,
    level: 1
  }

  componentWillReceiveProps (nextProps) {
    this.setState(prev => ({
      isAnswerCorrect: prev.level < nextProps.level,
      level: nextProps.level
    }))
  }

  render () {
    const { className } = this.props;
console.log('rerender')
    return (
      <div className={className}>
        <i className="fas fa-check"></i>
      </div> 
    )
  }
}

export default styled(LevelChange)`
  position: absolute;
  display: flex;
  align-items:center;
  justify-content: center;
  width: 0;
  height: 0;
  opacity: 0;
  border-radius: 50%;
  background-color: #27d564f0;
  font-size: 4.5rem;
  color: #e9ece5;
  animation-name: example;
  animation-duration: 0.8s;

  @keyframes example {
    0% {width: 120px; height: 120px}
    50% {width: 150px; height: 150px; opacity:0.7; font-size: 4.5rem;}
    100% {width: 120px; height: 120px}
  }
`;
