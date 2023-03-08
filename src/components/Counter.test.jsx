import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./Counter";

describe("Counter", () => {
  it("should say 1 when increase button is clicked", async () => {
    render(<Counter />);

    const paragraphTag = screen.getByRole("dialog");
    const buttonToClick = screen.getByText(/Increase/i);

    expect(paragraphTag).toHaveTextContent("You have clicked 0 times.");
    fireEvent.click(buttonToClick);
    await screen.findByText("You have clicked 1 times.");
  });

  // TODO: Implement test for click decrease here
});
