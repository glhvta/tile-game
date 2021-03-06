import React from 'react';
import PropTypes from 'prop-types';
import GameProgress from './GameProgress';
import GameControl from '../ModalFrames/GameControl';
import LevelChange from '../ModalFrames/LevelChange';
import GameFieldWrapper from './GameFieldWrapper';
import TilesBox from '../TilesBox/TilesBox';

class GameField extends React.Component {
  render() {
    const { timeLine, tiles, activeTiles, level, levelChange } = this.props;
    const { startGame, makeTilePressed } = this.props;

    return (
      <GameFieldWrapper>
        <GameProgress level={level} timeLine={timeLine} />
        <GameControl timeLine= {timeLine} startGame={startGame} level={level}/>
        {/* <GameEnd timeLine= {timeLine} level={level}/> */}
        <LevelChange level={level} isVisible={levelChange} />
        <TilesBox
          level={level} 
          tiles={tiles}
          levelChange={levelChange}
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
  levelChange: PropTypes.bool,
  startGame: PropTypes.func,
  makeTilePressed: PropTypes.func
};

export default GameField;
