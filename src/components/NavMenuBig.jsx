import { styled } from "styled-components";
import ListNavItem from "./ListNavItem";
import FlexContainer from "../ui/FlexContainer";

const StyledNavMenuBig = styled.nav`
  padding: 4rem 4rem;
  width: clamp(45rem, 60vw, 83rem);
  background: rgba(255, 255, 255, 0.04);

  @supports (backdrop-filter: blur(40.774227142333984px)) {
    backdrop-filter: blur(40.774227142333984px);
  }

  @media (max-width: 767.9px) {
    display: none;
  }
`;

const StyledUL = styled(FlexContainer)`
  justify-content: space-around;
`;

function NavMenuBig() {
  return (
    <StyledNavMenuBig>
      <StyledUL as="ul">
        <ListNavItem
          num="00"
          nav="/"
          pageName="HOME"
          colorText="white"
          menu="main"
        />
        <ListNavItem
          num="01"
          nav="destinations"
          pageName="DESTINATIONS"
          colorText="white"
          menu="main"
        />
        <ListNavItem
          num="02"
          nav="crew"
          pageName="CREW"
          colorText="white"
          menu="main"
        />
        <ListNavItem
          num="03"
          nav="technology"
          pageName="TECHNOLOGY"
          colorText="white"
          menu="main"
        />
      </StyledUL>
    </StyledNavMenuBig>
  );
}

export default NavMenuBig;
