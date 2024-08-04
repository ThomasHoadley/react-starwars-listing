import { serializeQueryParams } from "../helpers";
import { ApiArgs } from "../types";

export const getPlanet = (homeworldUrl: string, args?: ApiArgs) => {
  const urlParams = args && serializeQueryParams(args);

  const url = `${homeworldUrl}?${urlParams && urlParams}`;

  return fetch(url, {
    method: "GET",
  });
};
