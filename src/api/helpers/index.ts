import { ApiArgs } from "../types";

export const serializeQueryParams = (args: Record<string, any>) => {
  return Object.entries(args)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

export async function apiGetRequest(
  baseApiUrl: string,
  endpoint: string,
  args?: ApiArgs
) {
  const urlParams = args && serializeQueryParams(args);

  const url = `${baseApiUrl}/${endpoint}?${urlParams && urlParams}`;

  return fetch(url, {
    method: "GET",
  });
}

export async function apiPatchRequest(
  baseApiUrl: string,
  endpoint: string,
  urlArgs: ApiArgs = {},
  body: Record<string, any>
) {
  const urlParams = serializeQueryParams(urlArgs);
  const url = `${baseApiUrl}/${endpoint}?${urlParams && urlParams}`;

  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
