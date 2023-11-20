import { styled } from "styled-components";
import Paragraph from "../../ui/Paragraph";
import Headings from "../../ui/Headings";
import data from "../../data/data.json";
import { useClick } from "../../context/ClickContext";

const StyledCrewData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  grid-area: content;
`;

const StyledParCon = styled.div`
  max-width: ${(props) => props.$width && `${props.$width}ch`};
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* padding: 0 6rem; */
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
  }
`;

function CrewData() {
  const { crewItem } = useClick();

  return (
    <StyledCrewData>
      <StyledParCon>
        <Paragraph $colorText="white" $type="job-title">
          {data.crew[crewItem].role}
        </Paragraph>
        <Headings as="h3"> {data.crew[crewItem].name}</Headings>
      </StyledParCon>
      <StyledParCon $width="80">
        <Paragraph>{data.crew[crewItem].bio}</Paragraph>
      </StyledParCon>
    </StyledCrewData>
  );
}

export default CrewData;
