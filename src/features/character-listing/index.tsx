import { P } from "../../components/atoms/typography";
import { Button } from "../../components/shadcn/button";
import useGetCharacters from "./hooks/use-get-characters";

function CharactersListing() {
  const { data } = useGetCharacters();
  return (
    <div>
      <P>Character Listing</P>
      <Button>Example button</Button>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}

export default CharactersListing;
