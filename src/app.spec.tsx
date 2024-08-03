import { render } from "@/tests/test-utils";
import { screen } from "@testing-library/react";
import App from "./app";

test("Home page renders Characters Listing title", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Character Listing",
    })
  ).toBeVisible();
});

test("Home page renders Character List", async () => {
  render(<App />);

  const characters = await screen.findAllByTestId("character-link");
  expect(characters).toHaveLength(10);
  expect(characters[0]).toHaveTextContent("Luke Skywalker");
  expect(characters[1]).toHaveTextContent("C-3PO");
});
