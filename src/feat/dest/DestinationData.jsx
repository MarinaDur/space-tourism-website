import { styled } from "styled-components";
import DestinationsParagraph from "./DestinationsParagraph";
import Headings from "../../ui/Headings";
import FlexContainer from "../../ui/FlexContainer";

const StyledDestinationDataCon = styled(FlexContainer)`
  flex-direction: column;
  border-top: 2px solid hsl(var(--color-white-hover) / 0.1);
  padding-top: 3rem;
  margin-top: 3rem;
  row-gap: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
const StyledDestinationData = styled(FlexContainer)`
  flex-direction: column;
`;

function DestinationData({ distance, travelTime }) {
  return (
    <StyledDestinationDataCon id="flex--destinations-data">
      <StyledDestinationData>
        <DestinationsParagraph>AVG. DISTANCE</DestinationsParagraph>
        <Headings as="h4">{distance} KM</Headings>
      </StyledDestinationData>
      <StyledDestinationData>
        <DestinationsParagraph>EST. TRAVEL TIME</DestinationsParagraph>
        <Headings as="h4">{travelTime}</Headings>
      </StyledDestinationData>
    </StyledDestinationDataCon>
  );
}

export default DestinationData;
