import { lazy } from "react";
import TechElem from "../feat/technology/TechElem";
import EmptyDiv from "../ui/EmptyDiv";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Suspense } from "react";

const Background = lazy(() => import("../ui/MainPageCon"));

function Technology() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Background url={"../technology/background-technology"}>
        <EmptyDiv />
        <TechElem />
      </Background>
    </Suspense>
  );
}

export default Technology;
