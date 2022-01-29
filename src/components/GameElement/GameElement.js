import React from 'react';
import PropTypes from 'prop-types';
import Circle, {
  InnerCircle,
  OuterCircle,
  ShadowCircle,
} from './GameElement.styles';

import rock from '../../assets/images/icon-rock.svg';
import paper from '../../assets/images/icon-paper.svg';
import scissors from '../../assets/images/icon-scissors.svg';

function GameElement({ type }) {
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

  return (
    <OuterCircle type={type}>
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

GameElement.propTypes = {
  type: PropTypes.oneOf(['rock', 'paper', 'scissors']).isRequired,
};
export default GameElement;
