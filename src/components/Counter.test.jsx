/* eslint-env jest */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders without crashing and shows 0", () => {
    render(<Counter />);
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
  });

  test("increments counter when Increment button is clicked", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByRole("button", { name: /increment/i }));
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });

  test("decrements counter when Decrement button is clicked", async () => {
    render(<Counter />);
    await userEvent.click(screen.getByRole("button", { name: /decrement/i }));
    expect(screen.getByText(/count: -1/i)).toBeInTheDocument();
  });
});
