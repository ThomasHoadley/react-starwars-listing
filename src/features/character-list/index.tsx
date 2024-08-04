import { P } from "../../components/atoms/typography";
import CharacterList from "./components/character-list";
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
  return <CharacterList characters={characters} />;
}

export default CharactersListing;
