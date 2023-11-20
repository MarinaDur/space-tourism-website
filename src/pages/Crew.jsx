import { Suspense, lazy } from "react";
import CrewElem from "../feat/crew/CrewElem";
import EmptyDiv from "../ui/EmptyDiv";
import LoadingSpinner from "../ui/LoadingSpinner";

const Background = lazy(() => import("../ui/MainPageCon"));

function Crew() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Background url={"../crew/background-crew"}>
        <EmptyDiv />
        <CrewElem />
      </Background>
    </Suspense>
  );
}

export default Crew;
