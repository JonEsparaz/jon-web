import { render, screen } from "@testing-library/react";
import { App } from "./App";

it("renders correct content on landing page", () => {
  render(<App />);

  const header = screen.getByTestId("header");
  expect(header).toHaveTextContent("Jon Esparaz");

  const tagline = screen.getByTestId("tagline");
  expect(tagline).toHaveTextContent(
    ["Engineering Science", "x", "University of Toronto"].join("")
  );

  const links = screen.getAllByTestId("link");
  expect(links).toHaveLength(4);
  expect(links[0]).toHaveAccessibleName("Twitter");
  expect(links[1]).toHaveAccessibleName("GitHub");
  expect(links[2]).toHaveAccessibleName("LinkedIn");
  expect(links[3]).toHaveAccessibleName("YouTube");

  const accentBar = screen.getByTestId("accent-bar");
  expect(accentBar).toBeInTheDocument();

  const image = screen.getByTestId("image");
  expect(image).toBeInTheDocument();
});
