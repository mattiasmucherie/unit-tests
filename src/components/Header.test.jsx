import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("should render header with correct text", () => {
    const { container } = render(<Header />);

    const expectedHTML = '<h1 role="heading">Welcome to my counter app</h1>';
    expect(container).toContainHTML(expectedHTML);
  });
  it("should have attribute role set to heading", () => {
    render(<Header />);
    const h1 = screen.getByRole("heading");
    expect(h1).toHaveAttribute("role", "heading");
  });
  it("should render custom prop", () => {
    const titleText = "Hello world";
    render(<Header title={titleText} />);
    const h1 = screen.getByRole("heading");
    expect(h1).toHaveTextContent(titleText);
  });
});

// test("We just wanna try out debug", () => {
//   const { debug } = render(<Header />);
//   debug();
//   screen.logTestingPlaygroundURL();
//   expect(true).toBe(true);
// });
