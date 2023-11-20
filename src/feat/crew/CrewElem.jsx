import PageTitle from "../../components/PageTitle";
import CrewItem from "./CrewItem";
import ContantContainer from "../../ui/ContantContainer";

function CrewElem() {
  return (
    <ContantContainer id="grid-crew" $page="crew" $gap="10">
      <PageTitle num="02" title="MEET YOUR CREW" />
      <CrewItem />
    </ContantContainer>
  );
}

export default CrewElem;
