import { styled } from "styled-components";
import Headings from "../../ui/Headings";
import Paragraph from "../../ui/Paragraph";
import data from "../../data/data.json";
import { useClick } from "../../context/ClickContext";

const StyledTechData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  grid-area: content;
  padding-inline: 2rem;

  @media (min-width: 1200px) {
    padding-inline: 0;
  }
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledParContainer = styled.div`
  max-width: 80ch;
`;

function TechData() {
  const { techItem } = useClick();

  return (
    <StyledTechData>
      <StyledHeadingContainer>
        <Paragraph $type="subtext">THE TERMINOLPGY...</Paragraph>
        <Headings as="h3">{data.technology[techItem].name}</Headings>
      </StyledHeadingContainer>
      <StyledParContainer>
        <Paragraph>{data.technology[techItem].description}</Paragraph>
      </StyledParContainer>
    </StyledTechData>
  );
}

export default TechData;
