import { baseExternalApiUrl } from "../api.config";
import { apiGetRequest } from "../helpers";
import { GetApiArgs } from "../types";

export const getFilm = ({ id, ...args }: GetApiArgs) => {
  return apiGetRequest(baseExternalApiUrl, `films/${id}`, args);
};
