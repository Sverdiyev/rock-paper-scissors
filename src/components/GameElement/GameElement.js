import React from 'react';
import Circle, {
  InnerCircle,
  OuterCircle,
  ShadowCircle,
} from './GameElement.styles';

function GameElement(props) {
  return (
    <OuterCircle rock>
      <Circle rock>
        <ShadowCircle>
          <InnerCircle></InnerCircle>
        </ShadowCircle>
      </Circle>
    </OuterCircle>
  );
}

export default GameElement;
