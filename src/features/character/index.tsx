import { useParams } from "react-router-dom";
import { P } from "../../components/atoms/typography";
import { pruneCharacterData } from "../character-list/helpers";
import CharacterCard from "./components/character-card";
import useGetSingleCharacter from "./hooks/use-get-single-character";

function Character() {
  const { id } = useParams();
  if (!id) return;

  const { data: singleCharacterData } = useGetSingleCharacter(id);
  if (!singleCharacterData) return <P>Please enter a valid character URL</P>;
  const prunedData = pruneCharacterData(singleCharacterData);

  return (
    <div className="mx-auto max-w-full">
      <CharacterCard {...prunedData} />
    </div>
  );
}

export default Character;
