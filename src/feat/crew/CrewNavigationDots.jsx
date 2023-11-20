import { styled } from "styled-components";
import data from "../../data/data.json";
import { useClick } from "../../context/ClickContext";

const StyledCrewNavigationDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  grid-area: menu;
  @media (min-width: 1024px) {
    align-self: start;
  }
`;

const StyledDot = styled.div.attrs((props) => ({
  "aria-selected": props.$isSelected,
}))`
  width: 10px;
  height: 10px;
  background: var(--color-off-white);
  border-radius: 50%;
  opacity: ${(props) => (props.$currentItem ? "1" : "0.174363")};
  cursor: pointer;

  &:hover {
    opacity: 0.500094;
  }
  @media (min-width: 1200px) {
    width: 15px;
    height: 15px;
  }
`;

function CrewNavigationDots() {
  const { crewItem, handleCrewItem } = useClick();
  return (
    <StyledCrewNavigationDots>
      {data.crew.map((data, index) => (
        <StyledDot
          $isSelected={index === crewItem ? "true" : "false"}
          key={data.name}
          $currentItem={index === crewItem}
          onClick={() => handleCrewItem(index)}
        >
          <span className="sr-only">{data.role}</span>
        </StyledDot>
      ))}
    </StyledCrewNavigationDots>
  );
}

export default CrewNavigationDots;
