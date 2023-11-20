import { styled } from "styled-components";

const StyledEmptyDiv = styled.div`
  height: 100px;

  @media (min-width: 768px) {
    height: 150px;
  }
`;

function EmptyDiv() {
  return <StyledEmptyDiv>EmptyDiv</StyledEmptyDiv>;
}

export default EmptyDiv;
