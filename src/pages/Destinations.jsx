import DestionationsElem from "../feat/dest/DestionationsElem";
import EmptyDiv from "../ui/EmptyDiv";
import { lazy } from "react";
import { Suspense } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";

const Background = lazy(() => import("../ui/MainPageCon"));

function Destinations() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Background url={"../destination/background-destination"}>
        <EmptyDiv />
        <DestionationsElem />
      </Background>
    </Suspense>
  );
}

export default Destinations;
