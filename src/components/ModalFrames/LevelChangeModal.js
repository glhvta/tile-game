import React from 'react';
import styled from 'styled-components';

class LevelChangeModal extends React.Component {
  state = {
    isVisible: false,
    prevLevel: 0
  }

  ho = () => {

  }

  render () {
    const { level, className } = this.props;
    return (
      <div className={className}>
        +
      </div> 
    )
  }
}

export default styled(LevelChangeModal)`
  position: absolute;
  display: flex;
  align-items:center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #27d564f0;
  font-size: 4.5rem;
  color: #e9ece5;
`;
