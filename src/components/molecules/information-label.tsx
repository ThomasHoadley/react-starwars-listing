import { capitalizeFirstLetter } from "../../helpers";
import { P } from "../atoms/typography";

function InformationLabel({ title, value }: { title: string; value: string }) {
  return (
    <div className="space-y-0">
      <P className="font-bold">{capitalizeFirstLetter(title)}</P>
      <P>{capitalizeFirstLetter(value)}</P>
    </div>
  );
}
export default InformationLabel;
