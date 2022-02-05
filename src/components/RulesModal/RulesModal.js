import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import Backdrop, {
  ActionsContainer,
  RulesContainer,
} from './RulesModal.styles';
import rules from '../../assets/images/image-rules.svg';
import GameContext from '../../store/GameContext';

function RulesModal() {
  const gameCtx = useContext(GameContext);
  const closeModal = () => {
    gameCtx.hideModal();
  };
  return createPortal(
    <Backdrop onClick={closeModal}>
      <RulesContainer>
        <ActionsContainer>
          <span>rules</span>
          <button type="button" onClick={closeModal}>
            {String.fromCharCode('10006')}
          </button>
        </ActionsContainer>
        <img src={rules} alt="rules" />
      </RulesContainer>
    </Backdrop>,
    document.querySelector('#modal')
  );
}

export default RulesModal;
