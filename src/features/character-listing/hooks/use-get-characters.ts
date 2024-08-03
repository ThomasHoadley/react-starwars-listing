import { useQuery } from "@tanstack/react-query";
import { listCharacters } from "../../../api/characters/characters-listing.api";
import { ApiArgs, CharactersApiResponse } from "../../../api/types";

function useGetCharacters({ format, page, search }: ApiArgs = {}) {
  const argsObject = {
    ...(search && {
      search,
    }),
    ...(page && {
      page,
    }),
    ...(format && {
      format,
    }),
  };
  const getCharactersQueryKey = ["characters", argsObject];

  return useQuery<CharactersApiResponse, Error>({
    queryKey: getCharactersQueryKey,
    queryFn: async () => {
      const response = await listCharacters(argsObject);

      return response.json();
    },
  });
}

export default useGetCharacters;
