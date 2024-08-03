import { apiRequest } from "../helpers";
import { ApiArgs, GetApiArgs } from "../types";

export const getCharacters = (args?: ApiArgs) => {
  return apiRequest("people", args);
};

export const getSingleCharacter = ({ id, ...args }: GetApiArgs) => {
  return apiRequest(`people/${id}`, args);
};

// todo - add patch endpoint
