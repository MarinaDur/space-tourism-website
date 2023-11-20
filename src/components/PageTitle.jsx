import { styled } from "styled-components";
import Paragraph from "../ui/Paragraph";

const StyledPageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  grid-area: title;

  @media (min-width: 768px) and (max-width: 1200px) {
    margin-left: 5rem;
    /* margin-left: ${(props) => props.$marginL && `${props.$marginL}rem`}; */
  }
  @media (min-width: 768px) {
    justify-self: left;
  }
`;

function PageTitle({ num, title, page, marginL }) {
  return (
    <StyledPageTitle $page={page} $marginL={marginL}>
      <Paragraph $opacityText="0.25" $textSize="16" $type="subtext">
        {num}
      </Paragraph>
      <Paragraph $type="subtext" $colorText="white" $textSize="16">
        {title}
      </Paragraph>
    </StyledPageTitle>
  );
}

export default PageTitle;
