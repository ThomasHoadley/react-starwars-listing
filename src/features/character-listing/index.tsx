import { P } from "../../components/atoms/typography";
import CharacterTable from "./components/character-table";
import { pruneCharacterData } from "./helpers";
import useGetCharacters from "./hooks/use-get-characters";

function CharactersListing() {
  const {
    data: characterApiData,
    isLoading: isCharacterApiLoading,
    isError: isCharacterApiError,
  } = useGetCharacters();
  const characters = characterApiData && pruneCharacterData(characterApiData);

  if (isCharacterApiLoading) return <P>Loading...</P>; // todo improve loading spinner
  if (isCharacterApiError) return <P>There has been an error</P>;
  return (
    <>
      <P className="font-bold mb-5">
        Click the link below for more information on your favourite Star Wars
        Characters
      </P>
      <CharacterTable characters={characters} />
    </>
  );
}

export default CharactersListing;
