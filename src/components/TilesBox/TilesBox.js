import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tile from './Tile';
import GameProgress from './GameProgress'
import ModalFrame from './ModalFrame';
import LevelChangeModal from './LevelChangeModal';
import TilesBoxWrapper from './TilesBoxWrapper';
import { GAME_IN_PROCESS } from '../../actionTypes';
import { startGameAction, pressTileAction } from '../../actions'
import { tilesSelector, levelSelector, activeTilesSelector, timeLineSelector } from '../../selectors';

class TilesBox extends React.Component {
  render() {
    const { timeLine, tiles, activeTiles, level } = this.props;
    const { startGame, tilePressed } = this.props;

    return (
      <TilesBoxWrapper onClick={startGame} level={level}>
        {timeLine === GAME_IN_PROCESS && //or maybe make timer work from redux?
          <GameProgress level={level} timeLine={timeLine}/>}
        <ModalFrame timeLine= {timeLine} startGame={startGame}/>
        {/* <LevelChangeModal level={level} /> */}
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
