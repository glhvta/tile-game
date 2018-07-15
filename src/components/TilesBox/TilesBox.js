import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tile from './Tile';
import TilesBoxWrapper from './TilesBoxWrapper';
import { getActiveTiles } from '../../utils/tile-game';
import  { tilesSelector, levelSelector } from '../../selectors/tile-game';

class TilesBox extends React.Component {
  render() {
    const { tiles, level } = this.props;
    const activeTiles = getActiveTiles(tiles.length, level);

    return (
      <TilesBoxWrapper>
        <ul>
          {tiles.map((item, i) => ( 
            <Tile key={i} 
              isActive={activeTiles.includes(i)}
            />
          ))}
        </ul>
      </TilesBoxWrapper>
    )
  }
}

TilesBox.propTypes = {
  tiles: PropTypes.array
}

const mapStateToProps = state => {
  return {
    level: levelSelector(state),
    tiles: tilesSelector(state)
  }
}

export default connect(mapStateToProps, null)(TilesBox);
