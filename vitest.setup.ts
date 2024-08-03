import "@testing-library/jest-dom";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";
import db from "./db.json";

const people = db.people;

export const restHandlers = [
  // provide the property data for the test environment
  http.get("/people", () => {
    return HttpResponse.json(people);
  }),
  http.get("/people/1", () => {
    return HttpResponse.json(people[1]);
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
