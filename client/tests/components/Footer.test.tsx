import { render, screen } from "@testing-library/react";
import { Footer } from "../../src/components/Footer";

describe("Footer", () => {
  it("should have a footer", async () => {
    render(<Footer />);

    const footer = screen.getByRole("footer");

    expect(footer).toBeInTheDocument;
    expect(footer).toHaveTextContent(/Github/i);
  });
});
