import { styled } from "styled-components";

const NavButton = styled.button.attrs((props) => ({
  "aria-controls": "primary-navigation",
  "aria-expanded": props.$isExpanded,
}))`
  display: block;

  z-index: 3000000;

  background: transparent;
  background-image: ${(props) =>
    props.$isExpanded
      ? "url('../shared/icon-close.svg')"
      : "url('../shared/icon-hamburger.svg')"};
  background-repeat: no-repeat;
  width: 2.4rem;
  aspect-ratio: 1;
  border: 0;
  @media (min-width: 767.9px) {
    display: none;
  }
`;

export { NavButton };
