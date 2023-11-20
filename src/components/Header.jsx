import styled from "styled-components";
import Image from "../ui/Image";
import { useClick } from "../context/ClickContext";
import NavMenuBig from "./NavMenuBig";
import { NavButton } from "../ui/NavButton";

const StyledHeader = styled.header`
  position: absolute;
  z-index: 999;
  top: 2.4rem;
  display: flex;
  width: 100%;
  padding-inline: 5vw;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.$gap ? `${props.gap}rem` : "1rem")};
  @media (min-width: 768px) and (max-width: 1019.9px) {
    top: 0;
    right: 0;
    padding-right: 0;
  }
  @media (min-width: 1200px) {
    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      width: clamp(5%, 30vw, 350px);
      background: hsl(var(--color-white-hover) / 0.2);
      margin-left: 8rem;
      z-index: 999;
    }
  }
`;

function Header() {
  const { toggleMenu, handleToggleMenu } = useClick();
  return (
    <StyledHeader>
      <Image src="../shared/logo.svg" alt="logo" place="left" />

      <NavButton $isExpanded={toggleMenu} onClick={handleToggleMenu}>
        <span className="sr-only">open menu</span>
      </NavButton>

      <NavMenuBig />
    </StyledHeader>
  );
}

export default Header;
