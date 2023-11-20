import { styled } from "styled-components";
import Headings from "../../ui/Headings";
import Paragraph from "../../ui/Paragraph";
import DestinationData from "./DestinationData";

const StyledDestinationsImg = styled.img`
  max-width: 50%;

  @media (min-width: 768px) {
    max-width: 40%;
  }
  @media (min-width: 1200px) {
    max-width: 100%;
    justify-self: end;
  }
`;

const ImageCon = styled.div`
  min-height: 150px;
  width: 100%;
  grid-area: image;
`;

const DestinationsInfo = styled.article`
  grid-area: content;
  max-width: 80ch;
`;

function DestinationsItem({ src, alt, title, text, distance, travelTime }) {
  return (
    <>
      <ImageCon>
        <StyledDestinationsImg src={src} alt={alt} />
      </ImageCon>

      <DestinationsInfo>
        <Headings as="h2">{title}</Headings>

        <Paragraph>{text}</Paragraph>

        <DestinationData distance={distance} travelTime={travelTime} />
      </DestinationsInfo>
    </>
  );
}

export default DestinationsItem;
