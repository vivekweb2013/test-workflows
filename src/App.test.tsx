import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import App from "./App";

// Tests
describe("Render the main page correctly", async () => {
  it("Should render the page correctly", async () => {
    // Setup
    render(<App />);
    const text = await screen.queryByText("Vite + React");

    // Expectations
    expect(text).toBeInTheDocument();
  });
});
