import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import { getTilesBoxWidth } from '../../utils/tile-game';
import { fullTileWidth } from '../../constants/tile-game';

const TilesBox = ({ tiles, activeTiles, makeTilePressed, className }) => {
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
};

export default styled(TilesBox)`
  display: flex;
  flex-flow: row wrap;
  width: ${props => getTilesBoxWidth(fullTileWidth, props.level)}px;
  padding: 10px;
  background-color: #3b3a36;
`;
