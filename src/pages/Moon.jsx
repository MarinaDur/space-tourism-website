import DestinationsItem from "../feat/dest/DestinationsItem";

function Moon() {
  return (
    <>
      <DestinationsItem
        // src="../destination/image-moon"
        src="../destination/image-moon.png"
        alt="moon"
        title="MOON"
        text="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        distance="384,400"
        travelTime="3 DAYS"
      />
    </>
  );
}

export default Moon;
