import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../../api/characters/characters-listing.api";
import { CharactersApiResponse } from "../../../api/types";

function useGetCharacters() {
  // todo: consider initial implementation of pagination
  // const argsObject = {
  //   ...(_page && {
  //     _page,
  //   }),
  //   ...(_per_page && {
  //     _per_page,
  //   }),
  // };
  
  const getCharactersQueryKey = ["characters"];

  return useQuery<CharactersApiResponse, Error>({
    queryKey: getCharactersQueryKey,
    queryFn: async () => {
      const response = await getCharacters();

      return response.json();
    },
  });
}

export default useGetCharacters;
