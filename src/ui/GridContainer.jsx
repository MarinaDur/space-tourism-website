import { styled } from "styled-components";

const StyledGridFirst = styled.div`
  @media (min-width: 1200px) {
    grid-column: 2;
  }
`;
const StyledGridSecond = styled.div`
  @media (min-width: 1200px) {
    grid-column: 3;
  }
`;

export { StyledGridFirst, StyledGridSecond };
