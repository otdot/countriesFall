import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("renders content", () => {
  render(<Home />);

  const element = screen.getByText(
    "See countries, their weathers and bordering countries."
  );
  expect(element).toBeDefined();
});
