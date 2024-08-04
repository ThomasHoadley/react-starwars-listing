import { Link } from "react-router-dom";
import { CharacterDataPruned } from "../../../api/types";
import { P } from "../../../components/atoms/typography";
import { Card } from "../../../components/shadcn/card";
import { capitalizeFirstLetter } from "../../../helpers";
import { Pages } from "../../../pages/types";

function CharacterList({ characters }: { characters?: CharacterDataPruned[] }) {
  if (!characters) return null;
  return (
    <div className="grid grid-cols-6 gap-4">
      {characters.map((character) => {
        return (
          <Link
            data-testid="character-link"
            to={`${Pages.CHARACTER}/${character.id}`}
            className="col-span-6 sm:col-span-3 md:col-span-2"
          >
            <Card key={character.id} className="text-center space-y-0">
              <P className="font-bold">{character.name}</P>
              <P className="text-gray-500">
                Gender: {capitalizeFirstLetter(character.gender)}
              </P>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default CharacterList;
