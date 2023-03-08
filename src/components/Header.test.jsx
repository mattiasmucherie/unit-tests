import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("should render header with correct text", () => {
    const { container } = render(<Header />);
    const expectedHTML = '<h1 role="heading">Welcome to our counter app</h1>';
    expect(container).toContainHTML(expectedHTML);
  });
});
// test("We just wanna try out debug", () => {
//   const { debug } = render(<Header />);
//   debug();
//   expect(true).toBe(true);
// });
