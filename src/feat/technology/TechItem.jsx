import { styled, css } from "styled-components";
import TechNav from "./TechNav";
import TechData from "./TechData";
import data from "../../data/data.json";
import { useClick } from "../../context/ClickContext";

const StyledImgContainer = styled.div`
  grid-area: image;

  width: 100%;
  height: 180px;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 320px;
  }
  @media (min-width: 1200px) {
    height: 450px;
  }
`;

const StyledTechImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (min-width: 1200px) {
    ${(props) =>
      props.$screen === "small" &&
      css`
        display: none;
      `}
  }
  @media (max-width: 1199.9px) {
    ${(props) =>
      props.$screen === "big" &&
      css`
        display: none;
      `}
  }
`;

function TechItem() {
  const { techItem } = useClick();
  return (
    <>
      <StyledImgContainer>
        <StyledTechImg
          $screen="small"
          src={`${data.technology[techItem].images.landscape}`}
          alt="spaceport-landscape"
        />
        <StyledTechImg
          $screen="big"
          src={`${data.technology[techItem].images.portrait}`}
          alt="spaceport-landscape"
        />
      </StyledImgContainer>
      <TechNav />
      <TechData />
    </>
  );
}

export default TechItem;
