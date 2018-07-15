import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tile from './Tile';
import TilesBoxWrapper from './TilesBoxWrapper';
import { startGame, pressTileAction } from '../../actions'
import  { tilesSelector, levelSelector, activeTilesSelector } from '../../selectors/tile-game';
import { UPDATE_TILES } from '../../actionTypes';

class TilesBox extends React.Component {
  render() {
    const { tiles, activeTiles, level } = this.props;
    const { startGame, tilePressed } = this.props;
    
    return (
      <TilesBoxWrapper onClick={() => startGame(tiles.length, level)}>
        <ul>
          {tiles.map((item, i) => {
            return (
              <Tile key={i} 
                onClick={() => tilePressed(i)}
                isActive={activeTiles.includes(i)}
              />
            )
          })}
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
    tiles: tilesSelector(state),
    activeTiles: activeTilesSelector(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: (length, level) => dispatch(startGame({length, level})),
    tilePressed: index => dispatch(pressTileAction(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TilesBox);
