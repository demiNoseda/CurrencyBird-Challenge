import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import Spinner from "../../components/Spinner";
import { getReferrerList } from "../../helpers/service";
import UserSummary from "./components/UserSummary";

const ReferralSummaryPage = () => {
  const [referralUsersList, setReferralUsersList] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [alert, setAlert] = useState({
    msg: "",
    error: false,
    showAlert: false,
  });

  useEffect(() => {
    const requestApi = async () => {
      setSpinner(true);
      setAlert({ ...alert, showAlert: false });
      try {
        const response = await getReferrerList();
        setSpinner(false);
        if (response.data.length === 0) {
          setAlert({
            msg: "No hay ningun usuario que haya referido exitosamente",
            error: false,
            showAlert: true,
          });
        } else {
          setReferralUsersList(response.data);
        }
      } catch (error) {
        setSpinner(false);
        setAlert({
          msg: "No se pudo traer ningun dato",
          error: true,
          showAlert: true,
        });
        console.log(error);
      }
    };
    requestApi();
  }, []);

  return (
    <div className="referralSummary_card">
      <div className="expenses_list">
        <ul>
          <li className="title_row">
            <p className="name_column  title" style={{ flexBasis: "50%" }}>
              Nombre completo
            </p>
            <p className="invitation_column title" style={{ flexBasis: "10%" }}>
              Invitaciones
            </p>
            <p className="total_column title" style={{ flexBasis: "40%" }}>
              Total recibido $
            </p>
          </li>
          {spinner ? <Spinner /> : null}
          {alert.showAlert ? (
            <Alert msg={alert.msg} error={alert.error} />
          ) : null}
          {referralUsersList.map((user) => (
            <UserSummary
              key={user.id}
              name={user.name}
              invitations={user.invitations}
              totalAmount={user.totalRewardAmount}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReferralSummaryPage;
