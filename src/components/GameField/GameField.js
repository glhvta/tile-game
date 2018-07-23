import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameProgress from './GameProgress';
import GameControlModal from '../ModalFrames/GameControlModal';
import LevelChangeModal from '../ModalFrames/LevelChangeModal';
import GameFieldWrapper from './GameFieldWrapper';
import TilesBox from '../TilesBox/TilesBox';
import { GAME_IN_PROCESS } from '../../actionTypes';
import { startGameAction, pressTileAction } from '../../actions';
import { tilesSelector, levelSelector, activeTilesSelector, timeLineSelector } from '../../selectors';

class GameField extends React.Component {
  render() {
    const { timeLine, tiles, activeTiles, level } = this.props;
    const { startGame, makeTilePressed } = this.props;

    return (
      <GameFieldWrapper>
        {timeLine === GAME_IN_PROCESS && <GameProgress level={level} timeLine={timeLine}/>}
        <GameControlModal timeLine= {timeLine} startGame={startGame}/>
        {/* <LevelChangeModal level={level} /> */}
        <TilesBox
          level={level} 
          tiles={tiles}
          activeTiles={activeTiles}
          makeTilePressed={makeTilePressed}
        />
      </GameFieldWrapper>
    )
  }
}

GameField.propTypes = {
  tiles: PropTypes.array,
  timeLine: PropTypes.string,
  activeTiles: PropTypes.array,
  level: PropTypes.number,
  startGame: PropTypes.func,
  makeTilePressed: PropTypes.func
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
    makeTilePressed: index => dispatch(pressTileAction(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameField);
