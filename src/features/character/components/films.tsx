import { CharacterDataPruned } from "../../../api/types";
import { P } from "../../../components/atoms/typography";
import useGetFilms from "../hooks/use-get-films";

function Films({ films }: { films: CharacterDataPruned["films"] }) {
  const data = useGetFilms(films);

  return (
    <>
      <P>Films</P>
      <ul className="list-disc list-inside">
        {data.map((item) => {
          return <li key={item.data.title}>{item.data.title}</li>;
        })}
      </ul>
    </>
  );
}

export default Films;
