import { styled } from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  gap: ${(props) => (props.$gap ? `${props.gap}rem` : "1rem")};
`;

export default FlexContainer;
