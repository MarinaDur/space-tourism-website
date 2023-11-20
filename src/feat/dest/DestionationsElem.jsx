import DestinationsMenu from "./DestinationsMenu";
import { Outlet, useNavigation } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import ContantContainer from "../../ui/ContantContainer";
import LoadingSpinner from "../../ui/LoadingSpinner";

function DestionationsElem() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <ContantContainer id="grid-destinations" $page="dest" $gap="10">
      {isLoading && <LoadingSpinner />}
      <PageTitle num="01" title="PICK YOUR DESTINATION" />
      <DestinationsMenu />
      <Outlet />
    </ContantContainer>
  );
}

export default DestionationsElem;
