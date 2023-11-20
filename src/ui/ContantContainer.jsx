import { styled, css } from "styled-components";

const ContantContainer = styled.div`
  display: grid;
  text-align: center;
  place-items: center;
  /* row-gap: 10vw; */
  padding-inline: 1.6rem;
  padding-bottom: 4rem;
  & > * {
    max-width: ${(props) => props.$width && `${props.$width}ch`};
  }

  ${(props) =>
    props.$page === "home" &&
    css`
      row-gap: 5rem;
    `}
  ${(props) =>
    props.$page === "dest" &&
    css`
      grid-template-areas: "title" "image" "menu" "content";
      row-gap: 3rem;
      align-content: center;
    `}
  ${(props) =>
    props.$page === "crew" &&
    css`
      grid-template-areas: "title" "image" "menu" "content";
      row-gap: 3rem;
      /* align-content: center; */
    `}
  ${(props) =>
    props.$page === "tech" &&
    css`
      padding-inline: 0;

      grid-template-areas: "title" "image" "menu" "content";
      row-gap: 3rem;
      align-content: center;
    `}

  @media (min-width:768px) {
    ${(props) =>
      props.$page === "crew" &&
      css`
        row-gap: 6rem;
        padding-bottom: 0;
        grid-template-areas: "title" "content" "menu" "image";
      `}
    ${(props) =>
      props.$page === "dest" &&
      css`
        row-gap: 4.5rem;
      `}
  }

  @media (min-width: 1200px) {
    text-align: left;
    column-gap: ${(props) => (props.$gap ? `${props.$gap}rem` : "3.2rem")};
    grid-template-columns: minmax(1.6rem, 1fr) repeat(2, minmax(0, 60rem)) minmax(
        1.6rem,
        1fr
      );

    ${(props) =>
      props.$page === "home" &&
      css`
        padding-bottom: max(6rem, 15vh);
        align-items: end;
      `}

    ${(props) =>
      props.$page === "dest" &&
      css`
        text-align: left;
        justify-items: start;
        grid-template-areas:
          ". title title ."
          ". image menu ."
          ". image content .";
      `}

    ${(props) =>
      props.$page === "crew" &&
      css`
        justify-items: left;
        grid-template-areas:
          ". title image ."
          ". content image ."
          ". menu image .";
      `}
    ${(props) =>
      props.$page === "tech" &&
      css`
        justify-items: left;
        grid-template-columns: minmax(5rem, 1fr) repeat(8, minmax(0, 60rem));
        grid-template-areas:
          ". title title title title title title title title title"
          ". menu content content content content image image image image";
      `}
  }
`;

export default ContantContainer;
