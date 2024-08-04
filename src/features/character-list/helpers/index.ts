import { CharacterData, CharacterDataPruned } from "../../../api/types";

const getFilmIdFromUrl = (url: string) => {
  const regex = /(\d+)(?!.*\d)/;

  const match = url.match(regex);

  if (match) {
    return match[0];
  } else {
    return null;
  }
};

export const pruneCharacterData = ({
  id,
  eye_color,
  films,
  gender,
  hair_color,
  name,
  height,
  homeworld,
}: CharacterData): CharacterDataPruned => {
  return {
    id,
    eye_color,
    films: films.map((film) => getFilmIdFromUrl(film)) as string[],
    gender,
    hair_color,
    name,
    height,
    homeworldUrl: homeworld,
  };
};
