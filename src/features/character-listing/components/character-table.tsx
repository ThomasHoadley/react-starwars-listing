import { Link } from "react-router-dom";
import { CharacterDataPruned } from "../../../api/types";
import { stringToSlug } from "../../../helpers";
import { Pages } from "../../../pages/types";

function CharacterTable({
  characters,
}: {
  characters?: CharacterDataPruned[];
}) {
  if (!characters) return null;
  return (
    <div className="flex flex-col space-y-2">
      <ul className="list-disc">
        {characters.map((character, id) => {
          return (
            <li key={id}>
              <Link
                data-testid="character-link"
                to={`${Pages.CHARACTER}/${stringToSlug(character.name)}`}
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
