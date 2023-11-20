import { styled } from "styled-components";
import data from "../../data/data.json";
import { useClick } from "../../context/ClickContext";

const StyledTechNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  grid-area: menu;

  @media (min-width: 1200px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const StyledNavButton = styled.button`
  border-radius: 50%;
  border: 1px solid hsl(var(--color-white-hover) / 0.5);
  background: ${(props) =>
    props.$clicked ? "var(--color-off-white)" : "transparent"};
  width: 40px;
  height: 40px;
  color: ${(props) =>
    props.$clicked ? "var(--color-dark-blue)" : "var(--color-off-white)"};
  text-align: center;
  font-family: "Bellefair", sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }

  &:hover {
    border-color: hsl(var(--color-white-hover) / 1);
  }
`;

function TechNav() {
  const { techItem, handleTechItem } = useClick();
  return (
    <StyledTechNav>
      {data.technology.map((tech, index) => (
        <StyledNavButton
          key={tech.name}
          onClick={() => handleTechItem(index)}
          $clicked={index === techItem}
        >
          {index + 1}
        </StyledNavButton>
      ))}
    </StyledTechNav>
  );
}

export default TechNav;
