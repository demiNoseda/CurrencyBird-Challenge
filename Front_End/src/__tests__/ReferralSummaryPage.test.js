import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReferralSummaryPage from "../pages/referral/ReferralSummaryPage";

test("Renders content", () => {
  render(<ReferralSummaryPage />);

  expect(screen.getByText("Invitaciones")).toBeInTheDocument();
});
