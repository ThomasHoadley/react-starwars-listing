import { useQuery } from "@tanstack/react-query";
import { getSingleCharacter } from "../../../api/characters/characters-listing.api";
import { CharacterData, CharacterDataPruned } from "../../../api/types";

function useGetSingleCharacter(id: CharacterDataPruned["id"]) {
  const getCharactersQueryKey = ["characters", id];

  return useQuery<CharacterData, Error>({
    queryKey: getCharactersQueryKey,
    queryFn: async () => {
      const response = await getSingleCharacter({ id });

      return response.json();
    },
  });
}

export default useGetSingleCharacter;
