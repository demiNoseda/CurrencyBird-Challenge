import { useParams } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

const InvitationalRegisterPage = () => {
  let { invitationSerial } = useParams();

  return <RegisterForm invitationSerial={invitationSerial} />;
};

export default InvitationalRegisterPage;
