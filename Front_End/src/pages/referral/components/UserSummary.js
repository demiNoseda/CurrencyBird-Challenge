import { addCommas } from "../../../helpers/addCommas";

const UserSummary = ({ name, invitations, totalAmount }) => {



  return (
    <li className="user_row">
      <p className="name_column" style={{ flexBasis: "50%" }}>
        {name}
      </p>
      <p className="invitation_column" style={{ flexBasis: "20%" }}>
        {invitations}
      </p>
      <div className="total_column" style={{ flexBasis: "30%" }}>
        <p>{`$${addCommas(String(parseFloat(totalAmount)))}`}</p>
      </div>
    </li>
  );
};

export default UserSummary;
