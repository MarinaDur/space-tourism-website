import { styled } from "styled-components";

const StyledImage = styled.img`
  width: clamp(40px, 5vw, 48px);
  aspect-ratio: 1;
`;

function Image({ src, alt }) {
  return <StyledImage src={src} alt={alt} />;
}

export default Image;
