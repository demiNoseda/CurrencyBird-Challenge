import { useParams } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

const InvitationalRegisterPage = () => {
  let { invitationId } = useParams();

  return <RegisterForm invitationId={invitationId} />;
};

export default InvitationalRegisterPage;
