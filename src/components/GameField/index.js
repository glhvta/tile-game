import { connect } from 'react-redux';
import GameField from './GameField';
import { startGameAction, pressTileAction } from '../../actions';
import { tilesSelector, levelSelector, activeTilesSelector, timeLineSelector } from '../../selectors';

const mapStateToProps = state => {
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
