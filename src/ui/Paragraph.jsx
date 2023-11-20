import { styled, css } from "styled-components";

const Paragraph = styled.p`
  color: ${(props) =>
    props.$colorText === "white"
      ? "var(--color-off-white)"
      : "var(--color-light-purple)"};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: ${(props) => props.$opacityText === "0.25" && "0.25"};

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 28px;
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }

  ${(props) =>
    props.$type === "subtext" &&
    css`
      font-family: "Barlow Condensed", sans-serif;
      font-size: ${(props) => (props.$textSize === "16" ? "1.6rem" : "1.4rem")};
      line-height: normal;
      letter-spacing: 2.7px;

      @media (min-width: 768px) {
        font-size: ${(props) =>
          props.$textSize === "16"
            ? "2rem"
            : props.$page === "dest"
            ? "1.4rem"
            : "1.6rem"};
        letter-spacing: 3.375px;
      }
      @media (min-width: 1200px) {
        font-size: ${(props) =>
          props.$textSize === "16"
            ? "2.8rem"
            : props.$page === "dest"
            ? "1.4rem"
            : "1.6rem"};
        letter-spacing: 3.375px;
      }
    `}

  ${(props) =>
    props.$dispalyText === "inline" &&
    css`
      display: inline;
    `}


     ${(props) =>
    props.$type === "job-title" &&
    css`
      font-family: "Bellefair", sans-serif;
      font-size: 1.6rem;
      line-height: normal;
      text-transform: uppercase;
      opacity: 0.4951;
      margin-bottom: 8px;

      @media (min-width: 768px) {
        font-size: 2.4rem;
        margin-bottom: 0;
      }
      @media (min-width: 768px) {
        font-size: 3.2rem;
        margin-bottom: 0;
      }
    `}
`;

export default Paragraph;
