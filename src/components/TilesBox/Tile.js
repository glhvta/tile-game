import styled from 'styled-components';
import { tileSize } from '../../constants/tile-game';

const Tile = styled.li`
  list-style: none;
  width: ${tileSize}px;
  height: ${tileSize}px;
  margin: 5px 4px;
  cursor: pointer;

  background-color: ${props => 
    props.isActive === 'true' ? '#c0dfd9' : '#b3c2bf'
  };

  &:hover {
    background-color: #e9ece5;
  }
`
export default Tile;
