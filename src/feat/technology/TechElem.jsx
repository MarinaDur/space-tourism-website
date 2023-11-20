import PageTitle from "../../components/PageTitle";
import TechItem from "./TechItem";
import ContantContainer from "../../ui/ContantContainer";

function TechElem() {
  return (
    <ContantContainer $page="tech">
      <PageTitle num="03" title="SPACE LAUNCH 101" page="tech" marginL="5" />
      <TechItem />
    </ContantContainer>
  );
}

export default TechElem;
