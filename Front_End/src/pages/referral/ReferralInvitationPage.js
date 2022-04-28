import { useState } from "react";
import Spinner from "../../components/Spinner";

const ReferralInvitationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [referralUrl, setReferralUrl] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (e.target.type === "email") setEmail(e.target.value);
    else if (e.target.type === "text") setName(e.target.value);
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
    <div className="referralInvitation_card">
      <h2 className="title_sm">
        Refiere a otra persona y ambos reciben $5000 CLP para su próxima
        transferencia!
      </h2>
      <form className="text_bg" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu e-mail"
          value={email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingresa tu nombre completo"
          value={name}
          onChange={handleChange}
        />
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
      <button onClick={handleSubmit} className="text_md submit_btn">
        Compartir
      </button>
    </div>
  );
};

export default ReferralInvitationPage;
