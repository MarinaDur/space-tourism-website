import { styled, css } from "styled-components";
import FlexContainer from "./FlexContainer";

const StyledSubMenu = styled.nav`
  /* display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  gap: 1rem; */
  /* position: absolute;
  top: 41%;
  left: 50%;
  transform: translate(-50%, 0);

  @media (min-width: 768px) {
    top: 53%;
  }
  @media (min-width: 1200px) {
    position: static;
    top: 0;
    left: 0;
    transform: none;
  } */
`;

const StyledUL = styled(FlexContainer)`
  list-style: none;

  align-items: center;
  justify-content: space-around;
  text-align: center;

  width: 237.5px;

  overflow: hidden;
  text-align: center;
  height: 50px;

  @media (min-width: 768px) {
    width: 285.5px;
    justify-content: space-between;
  }
`;

function SubMenu({ children }) {
  return <StyledUL as="ul">{children}</StyledUL>;
}

export default SubMenu;
