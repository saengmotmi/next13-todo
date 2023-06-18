import { TODO_API } from "@/services/todos";

export const TodoApi = (
  path: string,
  rest: Parameters<typeof fetch>[1] = {}
) => {
  const withBasePath = TODO_API + path;
  const withDefaultHeaders = Object.assign(rest, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.b2o4bW1AbmF2ZXIuY29t.OV2SJ34Aci90EiBD-PzNM_xIW6eG8y1hKPfQVYlN7Ng",
      ...rest.headers,
    },
  });
  return fetch(withBasePath, withDefaultHeaders);
};
