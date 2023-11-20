import { styled, css } from "styled-components";

const Divider = styled.div`
  height: 1px;
  background: var(--color-light-gray-blue);
  width: 100%;
  margin-top: 1rem;
  @media (min-width: 768px) {
    margin-top: 2rem;
  }

  ${(props) =>
    props.$type === "crew" &&
    css`
      margin-top: 0px;
      transform: translateY(-3px);
      background: var(--color-light2-gray-blue);
      @media (min-width: 768px) {
        display: none;
      }
    `}

  ${(props) =>
    props.$screen === "big" &&
    css`
      @media (max-width: 1199.9px) {
        display: none;
      }
      @media (min-width: 1199.9px) {
        margin: 0;
        background: hsl(var(--color-white-hover) / 0.2);
      }
    `}
`;

export default Divider;
