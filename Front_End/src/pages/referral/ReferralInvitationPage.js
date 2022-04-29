import { useState } from "react";
import Alert from "../../components/Alert";
import Spinner from "../../components/Spinner";
import { postReferralLink } from "../../helpers/service";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ReferralInvitationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [referralURL, setReferralURL] = useState("");
  const [alert, setAlert] = useState({
    msg: "",
    error: false,
    showAlert: false,
  });
  const { height, width } = useWindowDimensions();

  const handleSubmit = async () => {
    if (name !== "" && email !== "") {
      setSpinner(true);
      try {
        const body = {
          name,
          email,
        };
        console.log("HELOOOOOO ", body);
        const response = await postReferralLink(body);
        setSpinner(false);
        setAlert({ ...alert, showAlert: false });
        console.log(response.data);
        const baseURL = process.env.REACT_APP_FRONTEND_URL;
        setReferralURL(`${baseURL}/register/invite/${response.data}`);
      } catch (error) {
        setSpinner(false);
        if (error.message === "The user doesn't exists");
        setAlert({
          msg: "Email o Nombre incorrecto, por favor revisa los campos",
          error: true,
          showAlert: true,
        });
        console.log(error);
      }
    } else {
      setAlert({
        msg: "Por favor completa los campos",
        error: true,
        showAlert: true,
      });
    }
  };

  return (
    <div className="referralInvitation_card">
      <h2 className="title_sm">
        Refiere a otra persona y ambos reciben $5000 CLP para su próxima
        transferencia!
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="text_bg"
          type="email"
          placeholder="Ingresa tu e-mail"
          value={email}
          onChange={(e) => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        />
        <input
          className="text_bg"
          type="text"
          placeholder="Ingresa tu nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {spinner ? (
        <Spinner />
      ) : alert.showAlert ? (
        <Alert msg={alert.msg} error={alert.error} />
      ) : null}
      {!spinner && !alert.showAlert && referralURL !== "" ? (
        <div className="alert">
          <a href={referralURL} className="text_md" target="_blank">
            {width <= 710 && referralURL.length > 10
              ? referralURL.substring(0, 24) + "..."
              : referralURL}
          </a>
        </div>
      ) : null}
      <button onClick={handleSubmit} className="text_md submit_btn">
        Compartir
      </button>
    </div>
  );
};

export default ReferralInvitationPage;
