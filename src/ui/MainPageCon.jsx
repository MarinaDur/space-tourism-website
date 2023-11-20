import { styled } from "styled-components";

const StyledMainPageCon = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
  background: url(${(props) => `${props.$url}-mobile.jpg`}) no-repeat;

  background-size: cover;
  background-position: bottom center;

  @media (min-width: 768px) {
    background: url(${(props) => `${props.$url}-tablet.jpg`}) no-repeat;
    background-size: cover;
    background-position: center center;
  }
  @media (min-width: 1024px) {
    background: url(${(props) => `${props.$url}-desktop.jpg`}) no-repeat;

    background-size: cover;
    background-position: bottom center;
  }
`;

function MainPageCon({ url, children, isMain }) {
  return (
    <StyledMainPageCon $url={url} as={isMain ? "main" : "section"}>
      {children}
    </StyledMainPageCon>
  );
}

export default MainPageCon;
