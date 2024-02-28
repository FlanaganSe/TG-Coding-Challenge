import { render, screen } from "@testing-library/react";
import { Header } from "../../src/components/Header";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  it("should have a title", async () => {
    render(<Header />);
    const headerTitle = screen.getByRole("title");
    expect(headerTitle).toHaveTextContent(/TG: Where/i);
  });

  it("should redirect to home page when clicking logo", async () => {
    render(<Header />);
    const user = userEvent.setup();

    const headerLogoLink = screen.getByRole("logo-link");

    await user.click(headerLogoLink);

    // Still on the home page
    expect(location.pathname).to.equal("/");
  });
});
