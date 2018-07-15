import React from 'react';
import { connect } from 'react-redux';

import TilesBoxWrapper from './TilesBoxWrapper';
const arr = [1,2,3,4,5,6,7,8,9]
class TilesBox extends React.Component {
  render() {
    return (
      <TilesBoxWrapper>
        <ul>
          {arr.map((item, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </TilesBoxWrapper>
    )
  }
}

export default TilesBox;
