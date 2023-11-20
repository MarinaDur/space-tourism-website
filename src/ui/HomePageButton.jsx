import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledButton = styled.div``;

const StyledNavLink = styled(Link)`
  &:link,
  &:visited {
    background: var(--color-off-white);
    display: inline-grid;
    place-items: center;
    padding: 0 2em;
    border-radius: 50%;
    aspect-ratio: 1;
    text-decoration: none;
    font-size: 2rem;
    font-family: "Bellefair";
    letter-spacing: 1.25px;

    @media (min-width: 768px) {
      font-size: 3.2rem;
    }
  }

  &:hover {
    box-shadow: 0 0 0 40px hsl(var(--color-white-hover) / 0.2);
    transition: all 0.5s ease-in-out;
  }
`;

function HomePageButton() {
  return (
    <StyledButton>
      <StyledNavLink to="/destinations">EXPLORE</StyledNavLink>
    </StyledButton>
  );
}

export default HomePageButton;
