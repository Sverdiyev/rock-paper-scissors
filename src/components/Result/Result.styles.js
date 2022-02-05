import styled from 'styled-components';

const StyledSpan = styled.span`
  font-size: 5.6rem;
  color: ${(p) => {
    switch (p.$winner) {
      case 'player':
        return 'green';
      case 'computer':
        return 'red';
      default:
        return 'white';
    }
  }};
  font-weight: 700;
  text-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export default StyledSpan;
