import { apiRequest } from "../helpers";
import { ApiArgs } from "../types";

export const listCharacters = (args?: ApiArgs) => {
  return apiRequest("people", {
    ...args,
  });
};

// todo - add functionality to edit height or gender
