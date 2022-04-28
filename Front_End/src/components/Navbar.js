import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <li>
        <Link to="/referral-invitation">Link de referido</Link>
      </li>
      <li>
        <Link to="/register">Registrarse</Link>
      </li>
    </div>
  );
};

export default Navbar;
