import { apiRequest } from "../helpers";
import { ApiArgs, GetSingleCharacterArgs } from "../types";

export const getCharacters = (args?: ApiArgs) => {
  return apiRequest("people", args);
};

export const getSingleCharacter = ({ id, ...args }: GetSingleCharacterArgs) => {
  return apiRequest(`people/${id}`, args);
};

// todo - add patch endpoint
