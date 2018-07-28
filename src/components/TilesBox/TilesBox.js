import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import { getTilesBoxWidth } from '../../utils/tile-game';
import { fullTileWidth } from '../../constants/tile-game';

class TilesBox extends React.Component {
  render () {
    const { tiles, activeTiles, makeTilePressed, className } = this.props;

    return (
      <ul className={className}>
        {tiles.map((item, i) => {
          return (
            <Tile key={i} 
              onClick={() => makeTilePressed(i)}
              isActive={activeTiles.includes(i)}
            />
          )
        })}
    </ul>
    )
  }
};

export default styled(TilesBox)`
  display: flex;
  flex-flow: row wrap;
  width: ${props => getTilesBoxWidth(fullTileWidth, props.level)}px; /*TODO: create memoization to prevent reduntant recalculation*/
  padding: 10px;
  background-color: #3b3a36;
  opacity: ${props => props.levelChange ? '0.8' : null};
`;
