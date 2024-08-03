import { CharacterDataPruned, CharactersApiResponse } from "../../../api/types";

export const pruneCharacterData = (
  characterApiResponse: CharactersApiResponse
): CharacterDataPruned[] => {
  return characterApiResponse.map(
    ({ eye_color, films, gender, hair_color, homeworld, name, id }) => {
      return {
        id,
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
