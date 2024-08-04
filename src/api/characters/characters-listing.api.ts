import { apiGetRequest, apiPatchRequest } from "../helpers";
import { ApiArgs, GetApiArgs, UpdateCharacterBody } from "../types";

export const getCharacters = (args?: ApiArgs) => {
  return apiGetRequest("people", args);
};

export const getSingleCharacter = ({ id, ...args }: GetApiArgs) => {
  return apiGetRequest(`people/${id}`, args);
};

export const updateCharacter = (
  body: UpdateCharacterBody,
  urlArgs?: ApiArgs
) => {
  return apiPatchRequest(`people/${body.id}`, urlArgs, body);
};
