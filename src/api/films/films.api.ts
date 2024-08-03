import { apiRequest } from "../helpers";
import { GetApiArgs } from "../types";

export const getFilm = ({ id, ...args }: GetApiArgs) => {
  return apiRequest(`films/${id}`, args);
};

// todo - add patch endpoint
