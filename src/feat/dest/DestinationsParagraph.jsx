import Paragraph from "../../ui/Paragraph";

function DestinationsParagraph({ children }) {
  return (
    <Paragraph $type="subtext" $page="dest">
      {children}
    </Paragraph>
  );
}

export default DestinationsParagraph;
