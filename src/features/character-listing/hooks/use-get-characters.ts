import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../../../api/characters/characters-listing.api";
import { ApiArgs, CharactersApiResponse } from "../../../api/types";

function useGetCharacters({ _page, _per_page }: ApiArgs = {}) {
  const argsObject = {
    ...(_page && {
      _page,
    }),
    ...(_per_page && {
      _per_page,
    }),
  };
  const getCharactersQueryKey = ["characters", argsObject];

  return useQuery<CharactersApiResponse, Error>({
    queryKey: getCharactersQueryKey,
    queryFn: async () => {
      const response = await getCharacters(argsObject);

      return response.json();
    },
  });
}

export default useGetCharacters;
