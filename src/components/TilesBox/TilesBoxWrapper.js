import styled from 'styled-components';
import { getTilesBoxWidth } from '../../utils/tile-game';

const tileSize = 55, tileHorizontalMargin = 4;
const fullTileWidth = tileSize + (tileHorizontalMargin * 2);

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 700px;
  height: 600px;
  background-color: #e9ece5;
  margin: 50px auto 0;

  ul {
    display: flex;
    flex-flow: row wrap;
    width: ${getTilesBoxWidth(fullTileWidth, 1)}px;
    padding: 10px;
    background-color: #3b3a36;
  }

  ul li {
    list-style: none;
    width: ${tileSize}px;
    height: ${tileSize}px;
    margin: 5px 4px;
    background-color: #b3c2bf;
    cursor: pointer;
  }

  ul li:hover {
    background-color: #e9ece5;
  }
`;
