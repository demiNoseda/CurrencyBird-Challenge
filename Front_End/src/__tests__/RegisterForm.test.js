import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RegisterForm from "../pages/register/components/RegisterForm";
import "@testing-library/jest-dom/extend-expect";

test("Renders content", () => {
  render(<RegisterForm invitationSerial={""} />);

  expect(screen.getByTestId("emailInput")).toBeInTheDocument();
  expect(screen.getByTestId("nameInput")).toBeInTheDocument();
  expect(screen.getByTestId("addressInput")).toBeInTheDocument();
  expect(screen.getByTestId("sexDropdown")).toBeInTheDocument();
});

describe("Register Form", () => {
  it("submit button is disabled when required fields are empty", async () => {
    render(<RegisterForm invitationSerial={""} />);
    const submitButton = await screen.getByTestId("buttonSubmit");

    expect(submitButton).toBeDisabled();
  });

  it("submit button is disabled when any of the required fields is empty", async () => {
    render(<RegisterForm invitationSerial={""} />);

    const emailInput = screen.getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    const submitButton = await screen.getByTestId("buttonSubmit");

    expect(submitButton).toBeDisabled();
  });

  it("Submit button is enabled when all required fields are completed", async () => {
    render(<RegisterForm invitationSerial={""} />);

    const emailInput = screen.getByTestId("emailInput");
    const nameInput = screen.getByTestId("nameInput");
    const addressInput = screen.getByTestId("addressInput");
    const sexDropdown = screen.getByTestId("sexDropdown");
    const submitButton = screen.getByTestId("buttonSubmit");

    fireEvent.change(emailInput, {
      target: { value: "user@test.com" },
    });
    fireEvent.change(nameInput, {
      target: { value: "Test 12345" },
    });
    fireEvent.change(addressInput, {
      target: { value: "Some address" },
    });
    fireEvent.click(sexDropdown);

    const masculineOption = screen.getByText("Masculino");
    fireEvent.click(masculineOption);

    expect(submitButton).toBeEnabled();
  });

  it("It opens the dropdown menu when you click it", async () => {
    render(<RegisterForm invitationSerial={""} />);

    const sexDropdown = screen.getByTestId("sexDropdown");
    fireEvent.click(sexDropdown);

    expect(screen.getByTestId("dropdownMenu")).toBeInTheDocument();
  });
});
