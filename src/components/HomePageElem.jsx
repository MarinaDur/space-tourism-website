import styled from "styled-components";
import Headings from "../ui/Headings";
import Paragraph from "../ui/Paragraph";
import HomePageButton from "../ui/HomePageButton";
import ContantContainer from "../ui/ContantContainer";
import { StyledGridFirst, StyledGridSecond } from "../ui/GridContainer";

const StyledText = styled(StyledGridFirst)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function HomePageElem() {
  return (
    <ContantContainer $page="home" $width="80">
      <StyledText>
        <Paragraph $type="subtext" $textSize="16" $screen="big">
          SO, YOU WANT TO TRAVEL TO
        </Paragraph>
        <Headings as="h1" $screen="big">
          SPACE
        </Headings>
        <Paragraph>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Paragraph>
      </StyledText>
      <StyledGridSecond>
        <HomePageButton />
      </StyledGridSecond>
    </ContantContainer>
  );
}

export default HomePageElem;
