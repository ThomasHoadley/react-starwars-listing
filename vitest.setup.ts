import "@testing-library/jest-dom";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";
import db from "./db.json";

const properties = db.people;

export const restHandlers = [
  // provide the property data for the test environment
  http.get("/people", () => {
    return HttpResponse.json(properties);
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
