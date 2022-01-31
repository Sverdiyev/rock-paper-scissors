import styled from 'styled-components';
import img from '../../../assets/images/bg-triangle.svg';

const StyledMain = styled.main`
  width: ${(p) => (p.gameState === 'finish' ? '70%' : '50%')};
  margin-top: 4%;
  padding: 0 ${(p) => (p.gameState !== 'ready' ? '0' : '5%')};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-image: url(${img});
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  ${(p) => (p.gameState !== 'ready' ? 'background: none;' : '')};
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export default StyledMain;
