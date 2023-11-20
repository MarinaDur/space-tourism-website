import ListNavItem from "../../components/ListNavItem";
import { styled } from "styled-components";
import FlexContainer from "../../ui/FlexContainer";

const StyledDestMenuUL = styled(FlexContainer)`
  align-items: center;
  justify-content: space-around;
  grid-area: menu;
  column-gap: 3rem;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

function DestinationsMenu() {
  return (
    <StyledDestMenuUL as="ul" id="flex--destinations-menu">
      <ListNavItem
        nav="/destinations/moon"
        pageName="MOON"
        textSizeB="16"
      ></ListNavItem>
      <ListNavItem
        nav="/destinations/mars"
        pageName="MARS"
        textSizeB="16"
      ></ListNavItem>
      <ListNavItem
        nav="/destinations/europa"
        pageName="EUROPA"
        textSizeB="16"
      ></ListNavItem>
      <ListNavItem
        nav="/destinations/titan"
        pageName="TITAN"
        textSizeB="16"
      ></ListNavItem>
    </StyledDestMenuUL>
  );
}

export default DestinationsMenu;
