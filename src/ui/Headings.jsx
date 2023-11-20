import { styled, css } from "styled-components";

const Headings = styled.h1`
  color: var(--color-off-white);
  text-align: center;
  font-style: normal;
  font-weight: 400;
  margin-block-start: 0;
  margin-block-end: 0;

  ${(props) =>
    props.as === "h1" &&
    css`
      /* font-size: 8rem; */
      line-height: 100px;
      font-size: clamp(8rem, 15vw, 15rem);

      @media (min-width: 768px) {
        /* font-size: 15rem; */
        line-height: 150px;
      }

      @media (min-width: 1200px) {
        text-align: left;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 5.6rem;
      line-height: 1;

      @media (min-width: 768px) {
        font-size: 8rem;
      }
      /* @media (min-width: 1024px) {
        text-align: left;
      } */
      @media (min-width: 1200px) {
        font-size: 10rem;
        text-align: left;
      }
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2.8rem;
      line-height: normal;
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 4rem;
      }

      /* @media (min-width: 1024px) {
        text-align: left;
      } */
      @media (min-width: 1200px) {
        font-size: 5.6rem;
        text-align: left;
      }
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2.8rem;
      line-height: normal;
      text-transform: uppercase;
      @media (min-width: 1200px) {
        text-align: left;
      }
    `}
`;

export default Headings;
