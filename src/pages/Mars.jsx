import DestinationsItem from "../feat/dest/DestinationsItem";
function Mars() {
  return (
    <>
      <DestinationsItem
        // src="../destination/image-mars"
        src="../destination/image-mars.png"
        alt="mars"
        title="MARS"
        text="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
        distance="225 MIL."
        travelTime="9 MONTHS"
      />
    </>
  );
}

export default Mars;
