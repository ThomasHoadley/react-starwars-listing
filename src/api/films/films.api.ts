import { apiGetRequest } from "../helpers";
import { GetApiArgs } from "../types";

export const getFilm = ({ id, ...args }: GetApiArgs) => {
  return apiGetRequest(`films/${id}`, args);
};
