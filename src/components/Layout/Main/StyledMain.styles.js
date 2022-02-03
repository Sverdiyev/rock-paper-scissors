import styled from 'styled-components';
import img from '../../../assets/images/bg-triangle.svg';

const StyledMain = styled.main`
  /* transition: padding 1s; */

  /* width: ${(p) => (p.gameState === 'finish' ? '70%' : '50%')}; */
  width: 70%;
  margin-top: 4%;
  padding: 0 ${(p) => (p.gameState !== 'ready' ? '0' : '15%')};
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  ${(p) => (p.gameState !== 'ready' ? 'background: none;' : '')};
`;
export const HorizontalContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  /* align-items: space-between; */
  justify-content: space-around;
  width: 100%;

  > * {
    transition: ${({ showResult }) =>
      showResult ? 'transform 0.5s linear' : 0};
  }

  > :nth-child(3) {
    transform: translateX(${({ showResult }) => (showResult ? '100px' : 0)});
  }
  > :nth-child(1) {
    transform: translateX(${({ showResult }) => (showResult ? '-100px' : 0)});
  }
`;

export default StyledMain;
