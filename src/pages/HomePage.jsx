import HomePageElem from "../components/HomePageElem";
import EmptyDiv from "../ui/EmptyDiv";
import { lazy } from "react";
import { Suspense } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";

const Background = lazy(() => import("../ui/MainPageCon"));

function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Background url={"../home/background-home"} isMain="main">
        <EmptyDiv />
        <HomePageElem />
      </Background>
    </Suspense>
  );
}

export default HomePage;
