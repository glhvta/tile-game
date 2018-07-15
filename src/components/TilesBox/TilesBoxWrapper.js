import styled from 'styled-components';

import { getTilesBoxWidth } from '../../utils/tile-game';
import { fullTileWidth } from '../../constants/tile-game';

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
`;
