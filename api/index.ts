import { API_ROUTES, API_URL } from "../constants";
import { DeepValueOf } from "../lib/utils";
import APIError, { type APIErrorResponse } from "@/lib/utils/error/api-error";

type APIOptions = {
  token?: string;
};

export async function get<Res>(
  path: DeepValueOf<typeof API_ROUTES> | string,
  options?: APIOptions,
) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options?.token &&
        options.token.length > 0 && { Cookie: options.token }),
    },
  });

  const json = await response.json();

  if ("statusCode" in json) {
    const error: APIErrorResponse = json;
    throw new APIError(error);
  }

  return json as Res;
}

export async function post<Req, Res>(
  path: DeepValueOf<typeof API_ROUTES> | string,
  data: Req,
  options?: APIOptions,
) {
  const response = await fetch(`https://next.danvery.com/api/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(options?.token &&
        options.token.length > 0 && { Cookie: options.token }),
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();

  if ("statusCode" in json) {
    const error: APIErrorResponse = json;
    throw new APIError(error);
  }

  return json as Res;
}

export async function getImage(path: string, options?: APIOptions) {
  const response = await fetch(`${API_URL}${path}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "image/png",
      ...(options?.token &&
        options.token.length > 0 && { Cookie: options.token }),
    },
  });

  const arrBuf = await response.arrayBuffer();
  const text = String.fromCharCode.apply(null, new Uint8Array(arrBuf) as any);

  return "data:image/jpeg;base64," + btoa(text);
}
