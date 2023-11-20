import { styled } from "styled-components";
import { useImage } from "react-image";

const StyledDestinationsImg = styled.img`
  grid-area: image;
  max-width: 50%;

  @media (min-width: 768px) {
    max-width: 40%;
  }
  @media (min-width: 1200px) {
    max-width: 100%;
    justify-self: end;
  }
`;
function ImageDest({ image }) {
  const { src, isLoading } = useImage({ srcList: image });
  console.log(isLoading);
  return <StyledDestinationsImg src={src} />;
}

export default ImageDest;
