import "./styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReferralInvitationPage from "./pages/referral/ReferralInvitationPage";
import InvitationalRegisterPage from "./pages/register/InvitationalRegisterPage";
import RegisterForm from "./pages/register/components/RegisterForm";
import ReferralSummaryPage from "./pages/referral/ReferralSummaryPage";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/referral/invitation"
            element={<ReferralInvitationPage />}
          />
          <Route
            path="/register/invite/:invitationSerial"
            element={<InvitationalRegisterPage />}
          />
          <Route
            path="/register"
            element={<RegisterForm invitationSerial={""} />}
          />
          <Route path="/referral/summary" element={<ReferralSummaryPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
