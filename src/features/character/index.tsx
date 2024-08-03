import { useParams } from "react-router-dom";
import { slugToString } from "../../helpers";

function Character() {
  const { name } = useParams();
  const nameString = name && slugToString(name);

  return <div>{nameString}</div>;
}

export default Character;
