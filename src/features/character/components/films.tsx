import { CharacterDataPruned } from "../../../api/types";
import { P } from "../../../components/atoms/typography";
import useGetFilms from "../hooks/use-get-films";

function Films({ films }: { films: CharacterDataPruned["films"] }) {
  const filmsData = useGetFilms(films);
  if (!filmsData) null;

  // todo - add types for the film endpoint
  // todo - handle loading state for films
  return (
    <>
      <P className="font-bold">Films</P>
      <ul className="list-disc list-inside">
        {filmsData.map((item) => {
          if (item && item.data && item.data.title) {
            return <li key={item.data.title}>{item.data.title}</li>;
          }
        })}
      </ul>
    </>
  );
}

export default Films;
