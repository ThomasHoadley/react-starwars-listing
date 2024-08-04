import { CharacterDataPruned } from "../../../api/types";
import CharacterCard from "./character-card";

function CharacterList({ characters }: { characters?: CharacterDataPruned[] }) {
  if (!characters) return null;
  return (
    <div className="grid grid-cols-6 gap-4">
      {characters.map((character) => {
        return <CharacterCard character={character} />;
      })}
    </div>
  );
}

export default CharacterList;
