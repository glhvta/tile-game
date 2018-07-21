import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tile from './Tile';
import TilesBoxWrapper from './TilesBoxWrapper';
import StartFrame from './StartFrame';
import { startGameAction, pressTileAction } from '../../actions'
import { tilesSelector, levelSelector, activeTilesSelector, timeLineSelector } from '../../selectors';
import { GAME_START } from '../../actionTypes';


class TilesBox extends React.Component {

  render() {
    const { timeLine, tiles, activeTiles, level } = this.props;
    const { startGame, tilePressed } = this.props;
    console.log(timeLine)
    return (
      <TilesBoxWrapper onClick={startGame} level={level}>
        {timeLine === GAME_START && <StartFrame startGame={startGame}/>}
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
  console.log(state)
  return {
    level: levelSelector(state),
    tiles: tilesSelector(state),
    activeTiles: activeTilesSelector(state),
    timeLine: timeLineSelector(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGameAction()),
    tilePressed: index => dispatch(pressTileAction(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TilesBox);
