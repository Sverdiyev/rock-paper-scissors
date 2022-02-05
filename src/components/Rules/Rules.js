import React, { useContext } from 'react';
import GameContext from '../../store/GameContext';
import RulesModal from '../RulesModal/RulesModal';
import StyledButton from './Rules.styles';

function Rules() {
  const gameCtx = useContext(GameContext);

  const { showModal, modalVisible } = gameCtx;

  return (
    <>
      {modalVisible && <RulesModal />}
      <StyledButton onClick={showModal}>rules</StyledButton>
    </>
  );
}

export default Rules;
