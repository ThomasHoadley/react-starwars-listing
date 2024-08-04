import { Link } from "react-router-dom";
import { CharacterDataPruned } from "../../../api/types";
import { P } from "../../../components/atoms/typography";
import { Card } from "../../../components/shadcn/card";
import { capitalizeFirstLetter } from "../../../helpers";
import { Pages } from "../../../pages/types";
import useGetPlanet from "../hooks/use-get-planet";

function CharacterCard({ character }: { character: CharacterDataPruned }) {
  // todo handle loading state for home planet
  const { data: planetData } = useGetPlanet(character.homeworldUrl);

  return (
    <Link
      data-testid="character-link"
      to={`${Pages.CHARACTER}/${character.id}`}
      className="col-span-6 sm:col-span-3 md:col-span-2"
    >
      <Card key={character.id} className="text-center space-y-0">
        <P className="font-bold">{character.name}</P>
        <div className="text-gray-500 space-y-0">
          <P>Gender: {capitalizeFirstLetter(character.gender)}</P>
          <P>Homeplanet: {planetData?.name}</P>
        </div>
      </Card>
    </Link>
  );
}

export default CharacterCard;
