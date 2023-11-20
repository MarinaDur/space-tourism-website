import DestinationsItem from "../feat/dest/DestinationsItem";

function Titan() {
  return (
    <>
      <DestinationsItem
        // src="../destination/image-titan"
        src="../destination/image-titan.png"
        alt="titan"
        title="TITAN"
        text="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        distance="1.6 BIL. MIL."
        travelTime="7 YEARS"
      />
    </>
  );
}

export default Titan;
