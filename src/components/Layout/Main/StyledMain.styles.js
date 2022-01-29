import styled from 'styled-components';
import img from '../../../assets/images/bg-triangle.svg';

const StyledMain = styled.main`
  width: 50%;
  padding: 0 ${(p) => (p.gameStatus === 'ready' ? '0' : '5%')};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-image: url(${img});
  background-size: 45%;
  background-repeat: no-repeat;
  background-position: center;
  ${(p) => (p.gameStatus === 'ready' ? 'background: none' : '')};
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export default StyledMain;
