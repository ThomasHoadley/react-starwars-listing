import { baseLocalApiUrl } from "../api.config";
import { apiGetRequest, apiPatchRequest } from "../helpers";
import { ApiArgs, GetApiArgs, UpdateCharacterBody } from "../types";

// note the people endpoint is being served locally, in order to mock requirements for databases

export const getCharacters = (args?: ApiArgs) => {
  return apiGetRequest(baseLocalApiUrl, "people", args);
};

export const getSingleCharacter = ({ id, ...args }: GetApiArgs) => {
  return apiGetRequest(baseLocalApiUrl, `people/${id}`, args);
};

export const updateCharacter = (
  body: UpdateCharacterBody,
  urlArgs?: ApiArgs
) => {
  return apiPatchRequest(baseLocalApiUrl, `people/${body.id}`, urlArgs, body);
};
