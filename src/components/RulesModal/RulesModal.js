import React from 'react';
import { createPortal } from 'react-dom';
import Backdrop, { RulesContainer } from './RulesModal.styles';
import rules from '../../assets/images/image-rules.svg';

function RulesModal() {
  return createPortal(
    <Backdrop>
      <RulesContainer>
        <div>
          <span>rules</span>
          <button type="button"> CLOSE </button>
        </div>
        <img src={rules} alt="rules" />
      </RulesContainer>
    </Backdrop>,
    document.querySelector('#modal')
  );
}

export default RulesModal;
