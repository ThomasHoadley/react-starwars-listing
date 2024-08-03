import { render } from "@/tests/test-utils";
import { screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./app";

describe("homepage", () => {
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

  test("User can navigate to Luke Skywalker page", async () => {
    render(<App />);
    const user = userEvent.setup();
    expect(screen.getByText(/Character Listing/i)).toBeInTheDocument();

    const link = await screen.findByText("Luke Skywalker");
    user.click(link);

    const characterPageTitle = await screen.findByText("Personal Information");
    expect(characterPageTitle).toBeInTheDocument();
  });
});
