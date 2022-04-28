import { useState } from "react";
import Spinner from "../../../components/Spinner";

const RegisterForm = ({ invitationId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [referralUrl, setReferralUrl] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    switch (e.target.type) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "sex":
        setSex(e.target.value);
        break;
      default:
        break;
    }
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Submittt");
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
      // setError(true);
      setReferralUrl("Test12345.com");
    }, 3000);
  };
  return (
    <div className="register_card">
      <h1 className="title_sm">Formulario de Registro</h1>
      <form className="text_bg" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Dirección"
          value={address}
          onChange={handleChange}
        />
        <select onChange={handleChange}  name="sex" id="sex">
          <option disabled hidden selected value="Femenino">
            Sexo
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
      </form>
      {spinner ? (
        <Spinner />
      ) : error ? (
        <p className="title_sm error">
          Lo siento, el email no se encuentra registrado
        </p>
      ) : referralUrl ? (
        <p className="title_sm">{referralUrl}</p>
      ) : null}
      <button onClick={handleSubmit} className="text_sm submit_btn">
        Registrarse
      </button>
    </div>
  );
};

export default RegisterForm;
