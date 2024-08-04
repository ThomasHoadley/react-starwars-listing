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
  const characters =
    characterApiData &&
    characterApiData.map((character) => pruneCharacterData(character));

  if (isCharacterApiLoading) return <P>Loading...</P>; // todo improve user messaging
  if (isCharacterApiError) return <P>There has been an error</P>;
  return (
    <>
      <P className="mb-5 italic">
        Click the link below for more information on your favourite Star Wars
        Characters
      </P>
      <CharacterTable characters={characters} />
    </>
  );
}

export default CharactersListing;
