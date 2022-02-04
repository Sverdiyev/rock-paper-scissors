import React from 'react';
import { createPortal } from 'react-dom';
import RulesModal from '../RulesModal/RulesModal';
import StyledButton from './Rules.styles';

function Rules() {
  return (
    <>
      <RulesModal />
      <StyledButton>rules</StyledButton>
    </>
  );
}

export default Rules;
