import styled from 'styled-components';
import { tileSize } from '../../constants';

const Tile = styled.li`
  list-style: none;
  width: ${tileSize}px;
  height: ${tileSize}px;
  margin: 5px 4px;
  cursor: pointer;

  background-color: ${props => 
    props.isActive === true ? '#3fb0ac' : '#b3c2bf'
  };

  &:hover {
    background-color: ${props => 
      props.isActive === true ? '#3fb0ac' : '#e9ece5'
    };
  }
`;

export default Tile;
