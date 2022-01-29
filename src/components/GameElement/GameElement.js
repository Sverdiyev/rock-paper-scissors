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
import GameContext from '../store/game-context';

function GameElement({ type, id }) {
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
    gameCtx.setPlayerChoice(id);
  };

  return (
    <OuterCircle onClick={onPlayerChoice} type={type} id={id}>
      <Circle type={type}>
        <ShadowCircle>
          <InnerCircle>
            <img src={imgSrc} alt={type} />
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
