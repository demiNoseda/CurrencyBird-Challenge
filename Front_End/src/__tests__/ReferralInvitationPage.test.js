import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReferralInvitationPage from "../pages/referral/ReferralInvitationPage";

test("Renders content", () => {
  render(<ReferralInvitationPage />);

  expect(screen.getByTestId("emailInput")).toBeInTheDocument();
  expect(screen.getByTestId("nameInput")).toBeInTheDocument();
});

describe("Referral invitation Form", () => {
  it("submit button is disabled when required fields are empty", async () => {
    render(<ReferralInvitationPage />);
    const submitButton = await screen.getByTestId("buttonSubmit");

    expect(submitButton).toBeDisabled();
  });

  it("submit button is disabled when any of the required fields is empty", async () => {
    render(<ReferralInvitationPage />);

    const emailInput = screen.getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    const submitButton = await screen.getByTestId("buttonSubmit");

    expect(submitButton).toBeDisabled();
  });

  it("Submit button is enabled when all required fields are completed", async () => {
    render(<ReferralInvitationPage />);

    const emailInput = screen.getByTestId("emailInput");
    const nameInput = screen.getByTestId("nameInput");
    const submitButton = screen.getByTestId("buttonSubmit");

    fireEvent.change(emailInput, {
      target: { value: "user@test.com" },
    });
    fireEvent.change(nameInput, {
      target: { value: "Test 12345" },
    });

    expect(submitButton).toBeEnabled();
  });
});
