import { useState } from "react";
import Alert from "../../../components/Alert";
import Spinner from "../../../components/Spinner";
import { postRegisterUser } from "../../../helpers/service";
import Dropdown from "./Dropdown";

const RegisterForm = ({ invitationSerial }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("Sex");
  const [address, setAddress] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [alert, setAlert] = useState({
    msg: "",
    error: false,
    showAlert: false,
  });

  const handleSubmit = async () => {
    setSpinner(true);
    setAlert({ ...alert, showAlert: false });
    try {
      const body = {
        name,
        email,
        address,
        sex,
        serial: invitationSerial ? invitationSerial : "",
      };
      const response = await postRegisterUser(body);
      if (response.data.msg === "The user was registered successfully") {
        setAlert({
          msg: "Te has registrado correctamente",
          error: false,
          showAlert: true,
        });
      }
      setSpinner(false);
      setName("");
      setEmail("");
      setSex("Sex");
      setAddress("");
    } catch (error) {
      setSpinner(false);
      if (error.message === "Network Error") {
        setAlert({
          msg: "No se pudo conectar con el servidor",
          error: true,
          showAlert: true,
        });
      } else {
        if (error.response.data.msg === "The user already exists") {
          setAlert({
            msg: "El email ya se encuentra registrado",
            error: true,
            showAlert: true,
          });
        } else {
          setAlert({
            msg: "No se pudo registrar",
            error: true,
            showAlert: true,
          });
        }
      }
      console.log(error);
    }
  };
  return (
    <div className="register_card">
      <h1 className="title_sm">Formulario de Registro</h1>
      <form className="text_bg" onSubmit={(e) => e.preventDefault()}>
        <input
          data-testid="nameInput"
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text_bg"
        />
        <input
          data-testid="emailInput"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text_bg"
        />
        <input
          data-testid="addressInput"
          type="text"
          name="address"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="text_bg"
        />
        <div className="form_dropdown">
          <Dropdown selected={sex} setSelected={setSex} />
        </div>
      </form>
      {spinner ? (
        <Spinner />
      ) : alert.showAlert ? (
        <Alert msg={alert.msg} error={alert.error} />
      ) : null}
      <button
        disabled={
          name === "" ||
          email === "" ||
          address === "" ||
          sex === "" ||
          sex === "Sex"
        }
        data-testid="buttonSubmit"
        onClick={handleSubmit}
        className="text_md submit_btn"
      >
        Registrarse
      </button>
    </div>
  );
};

export default RegisterForm;
