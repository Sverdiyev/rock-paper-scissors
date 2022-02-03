import styled from 'styled-components';
import img from '../../../assets/images/bg-triangle.svg';

const StyledMain = styled.main`
  /* transition: padding 20s; */

  /* width: ${(p) => (p.gameState === 'finish' ? '70%' : '50%')}; */
  width: 70%;
  margin-top: 4%;
  padding: 0 ${(p) => (p.gameState !== 'ready' ? '0' : '15%')};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-image: url(${img});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  ${(p) => (p.gameState !== 'ready' ? 'background: none;' : '')};
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export default StyledMain;
