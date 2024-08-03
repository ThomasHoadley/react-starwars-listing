import { useQueries } from "@tanstack/react-query";
import { getFilm } from "../../../api/films/films.api";
import { CharacterDataPruned } from "../../../api/types";

function useGetFilms(films: CharacterDataPruned["films"]) {
  // todo add types for the film endpoint
  return useQueries({
    queries: films.map((film) => {
      return {
        queryKey: ["film", film],
        queryFn: async () => {
          const data = await getFilm({ id: film });
          return data.json();
        },
      };
    }),
  });
}

export default useGetFilms;
