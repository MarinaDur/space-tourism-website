import { styled } from "styled-components";
import CrewData from "./CrewData";
import CrewNavigationDots from "./CrewNavigationDots";
import data from "../../data/data.json";
import { useClick } from "../../context/ClickContext";

const StyledCrewImageCon = styled.div`
  grid-area: image;
  align-self: end;
  justify-self: right;
  height: 90%;
  display: grid;
  width: 100%;
  background: url(${(props) => props.$bg}) no-repeat bottom right;
  background-size: contain;

  @media (max-width: 1199px) {
    display: none;
  }
`;

const StyledCrewImage = styled.img`
  max-width: 50%;
  border-bottom: 2px solid hsl(var(--color-white-hover) / 0.1);
  align-self: end;
  justify-self: center;
  opacity: 1; /* Image is always visible */
  transition: opacity 1s ease-in-out;

  @media (min-width: 1200px) {
    display: none;
  }
`;

function CrewItem() {
  const { crewItem } = useClick();

  return (
    <>
      <CrewNavigationDots />
      <CrewData />
      <StyledCrewImageCon $bg={`${data.crew[crewItem].images.png}`} />
      <StyledCrewImage
        src={`${data.crew[crewItem].images.png}`}
        alt={`crew member ${data.crew[crewItem].name}`}
      />
    </>
  );
}

export default CrewItem;
