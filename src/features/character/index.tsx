import { useParams } from "react-router-dom";
import useGetSingleCharacter from "./hooks/use-get-single-character";

function Character() {
  const { id } = useParams();
  if (!id) return;

  const { data } = useGetSingleCharacter(id);

  return <div>{JSON.stringify(data, null, 2)}</div>;
}

export default Character;
