import { styled } from "styled-components";
import ListNavItem from "./ListNavItem";
import { useClick } from "../context/ClickContext";

const StyledNavMenu = styled.nav`
  position: fixed;
  width: ${(props) => (props.$toggleMenu ? "254px" : "0px")};
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.04);
  top: 0;
  z-index: 1;
  right: 0;
  /* padding: 118px 32px; */
  /* padding: ${(props) => (props.$openMenu ? "118px 32px" : "0px")}; */
  transition: 0.4s width ease-in;
  overflow: hidden;

  @supports (backdrop-filter: blur(40.774227142333984px)) {
    backdrop-filter: blur(40.774227142333984px);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3.2rem;
  overflow: hidden;
  transform: translate(30px, 114px);
  padding-bottom: 2rem;
`;

function NavMenuSmall() {
  const { toggleMenu } = useClick();
  return (
    <StyledNavMenu $toggleMenu={toggleMenu}>
      <StyledUL id="primary-navigation">
        <ListNavItem
          nav="/"
          pageName="HOME"
          num="00"
          colorText="white"
          textSize="16"
        />
        <ListNavItem
          nav="destinations"
          pageName="DESTINATIONS"
          num="01"
          colorText="white"
          textSize="16"
        />
        <ListNavItem
          nav="crew"
          pageName="CREW"
          num="02"
          colorText="white"
          textSize="16"
        />
        <ListNavItem
          nav="technology"
          pageName="TECHNOLOGY"
          num="03"
          colorText="white"
          textSize="16"
        />
      </StyledUL>
    </StyledNavMenu>
  );
}

export default NavMenuSmall;
