import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import Circle, {
  InnerCircle,
  OuterCircle,
  ShadowCircle,
} from './GameElement.styles';

import rock from '../../assets/images/icon-rock.svg';
import paper from '../../assets/images/icon-paper.svg';
import scissors from '../../assets/images/icon-scissors.svg';
import GameContext from '../store/GameContext';

function GameElement({ type, gameId, player = false }) {
  let imgSrc;
  switch (type) {
    case 'rock':
      imgSrc = rock;
      break;
    case 'paper':
      imgSrc = paper;
      break;
    case 'scissors':
      imgSrc = scissors;
      break;
    default:
      console.log('error');
  }

  const gameCtx = useContext(GameContext);

  const onPlayerChoice = () => {
    if (gameCtx.gameFinished) return;
    gameCtx.setPlayerChoice(gameId);
  };
  const options = { type, gameState: gameCtx.gameState, player };

  const showPicture = gameCtx.gameState !== 'waiting' || player;

  return (
    <OuterCircle onClick={onPlayerChoice} gameId={gameId} {...options}>
      <Circle {...options}>
        <ShadowCircle {...options}>
          <InnerCircle {...options}>
            {showPicture && <img src={imgSrc} alt={type} />}
          </InnerCircle>
        </ShadowCircle>
      </Circle>
    </OuterCircle>
  );
}

// GameElement.propTypes = {
//   type: PropTypes.oneOf(['rock', 'paper', 'scissors']).isRequired,
//   id: PropTypes.string.isRequired,
// };
export default GameElement;
