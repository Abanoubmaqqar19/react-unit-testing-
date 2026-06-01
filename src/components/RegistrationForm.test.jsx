import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegistrationForm from "./RegistrationForm";

describe("RegistrationForm Component", () => {
  test("typing updates input values", async () => {
    render(<RegistrationForm />);
    const usernameInput = screen.getByRole("textbox", { name: /username/i });
    await userEvent.type(usernameInput, "David");
    expect(usernameInput.value).toBe("David");
  });

  test("shows error when password is too short", async () => {
    render(<RegistrationForm />);
    await userEvent.type(screen.getByLabelText(/password/i), "123");
    expect(
      screen.getByText(/password must be at least 6 characters/i),
    ).toBeInTheDocument();
  });

  test("submit button is disabled initially", () => {
    render(<RegistrationForm />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
  });

  test("submit button enables when all fields are valid", async () => {
    render(<RegistrationForm />);
    await userEvent.type(
      screen.getByRole("textbox", { name: /username/i }),
      "David",
    );
    await userEvent.type(
      screen.getByRole("textbox", { name: /email/i }),
      "david@test.com",
    );
    await userEvent.type(screen.getByLabelText(/password/i), "password123");
    expect(screen.getByRole("button", { name: /submit/i })).toBeEnabled();
  });
});
