import styled from 'styled-components';

const GameResultContainer = styled.div`
  position: absolute;
  left: 39%;
  top: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: append-animate 0.5s linear;
  /* overflow: hidden; */

  @keyframes append-animate {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default GameResultContainer;
