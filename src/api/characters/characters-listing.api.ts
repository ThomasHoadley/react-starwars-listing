import { apiRequest } from "../helpers";
import { ApiArgs } from "../types";

export const listCharacters = (args?: ApiArgs) => {
  return apiRequest("people", {
    ...args,
  });
};
