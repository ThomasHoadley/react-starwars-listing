import { CharacterDataPruned, CharactersApiResponse } from "../../../api/types";

export const pruneCharacterData = (
  characterApiResponse: CharactersApiResponse
): CharacterDataPruned[] => {
  return characterApiResponse.results.map(
    ({ eye_color, films, gender, hair_color, homeworld, name }) => {
      return {
        eye_color,
        films,
        gender,
        hair_color,
        homeworld,
        name,
      };
    }
  );
};
