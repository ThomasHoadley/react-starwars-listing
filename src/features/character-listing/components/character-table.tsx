import { Link } from "react-router-dom";
import { CharacterDataPruned } from "../../../api/types";
import { Pages } from "../../../pages/types";

function CharacterTable({
  characters,
}: {
  characters?: CharacterDataPruned[];
}) {
  if (!characters) return null;
  return (
    <div className="flex flex-col space-y-2">
      <ul className="list-disc list-inside">
        {characters.map((character) => {
          return (
            <li key={character.id}>
              <Link
                data-testid="character-link"
                to={`${Pages.CHARACTER}/${character.id}`}
              >
                {character.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharacterTable;
