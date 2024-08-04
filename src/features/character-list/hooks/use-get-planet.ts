import { useQuery } from "@tanstack/react-query";
import { getPlanet } from "../../../api/planets/planets.api";
import { PlanetApiResponse } from "../../../api/types";

function useGetPlanet(homeworldUrl: string) {
  const getPlanetQueryKey = ["planet", homeworldUrl];

  // todo perhaps prune the results so that we only get the name data.
  return useQuery<PlanetApiResponse, Error>({
    queryKey: getPlanetQueryKey,
    queryFn: async () => {
      const response = await getPlanet(homeworldUrl);
      return response.json();
    },
  });
}

export default useGetPlanet;
