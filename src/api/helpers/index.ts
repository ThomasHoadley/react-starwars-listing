import { baseApiUrl } from "../api.config";
import { ApiArgs } from "../types";

export const serializeQueryParams = (args: Record<string, any>) => {
  return Object.entries(args)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

export async function apiRequest(endpoint: string, args: ApiArgs) {
  const urlParams = serializeQueryParams({
    ...(args && args),
  });

  const url = `${baseApiUrl}/${endpoint}?${urlParams && urlParams}`;

  return fetch(url, {
    method: "GET",
  });
}
