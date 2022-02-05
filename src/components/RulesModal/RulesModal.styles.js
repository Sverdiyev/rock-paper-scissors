import styled from 'styled-components';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Backdrop;

export const RulesContainer = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 0.8rem;
  /* width: 15%; */
  /* height: 30%; */
  > img {
    padding: 1.7rem;
  }
`;
export const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* width: 15%; */
  /* height: 30%; */
  margin-bottom: 3rem;
  > span {
    color: #3b4262;
    font-size: 3.2rem;
    line-height: 3.2rem;
    text-transform: uppercase;
  }
  > button {
    background-color: transparent;
    border: none;
    color: #979797;
    font-size: 3rem;
    height: 100%;
    aspect-ratio: 1.5;
    cursor: pointer;
  }
`;
