import { styled, css } from "styled-components";
import { NavLink } from "react-router-dom";
import { useClick } from "../context/ClickContext";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: ${(props) =>
      props.$colorText === "white"
        ? "var(--color-off-white)"
        : "var(--color-light-purple)"};

    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    text-align: center;
    width: min-content;
    font-family: "Barlow Condensed", sans-serif;
    font-size: ${(props) => (props.$textSize === "16" ? "1.6rem" : "1.4rem")};
    line-height: normal;
    letter-spacing: 2.7px;
    display: inline;
    @media (min-width: 768px) {
      font-size: ${(props) =>
        props.$textSizeB === "16" ? "1.6rem" : "1.4rem"};

      ${(props) =>
        props.$middleScreen &&
        css`
          letter-spacing: 2.7px;
        `}
    }

    ${(props) =>
      props.$menu === "main" &&
      css`
        @media (min-width: 1200px) {
          font-size: 1.6rem;
        }
      `}
  }

  &:hover {
    padding: 10px 0;
    border-bottom: 0.2rem solid hsl(var(--color-white-hover) / 0.5);
    ${(props) =>
      props.$menu === "main" &&
      css`
        @media (min-width: 768px) {
          padding: 37px 0;
        }
      `}
  }

  &.active {
    padding: 10px 0;
    border-bottom: 0.2rem solid hsl(var(--color-white-hover) / 1);
    color: var(--color-off-white);
    ${(props) =>
      props.$menu === "main" &&
      css`
        @media (min-width: 768px) {
          padding: 37px 0;
        }
      `};
  }
`;

const StyledNum = styled.span`
  color: var(--color-off-white);

  font-family: "Barlow Condensed", sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.7px;
  /* margin-right: 11px; */
  overflow: hidden;
  text-align: center;
  display: inline;
  @media (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
`;

const StyledListItem = styled.li`
  text-align: center;
  /* width: 100%; */
`;

const StyleDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1.1rem;
`;
function ListNavItem({
  nav,
  pageName,
  num,
  colorText,
  textSize,
  textSizeB,
  menu,
}) {
  const { handleCloseMenu } = useClick();

  return (
    <StyleDiv>
      {num && <StyledNum aria-hidden="true">{num}</StyledNum>}
      <StyledListItem>
        <StyledNavLink
          to={nav}
          onClick={handleCloseMenu}
          $type="subtext"
          $colorText={colorText}
          $dispalyText="inline"
          $textSize={textSize}
          $textSizeB={textSizeB}
          $menu={menu}
        >
          {pageName}
        </StyledNavLink>
      </StyledListItem>
    </StyleDiv>
  );
}

export default ListNavItem;
