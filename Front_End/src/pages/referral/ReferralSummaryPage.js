import UserSummary from "./components/UserSummary";

const ReferralSummaryPage = ({ ReferralusersSummary }) => {
  const referralUsersSummary = [
    { id: 1, name: "Bruce wayne", invitations: 2, totalAmount: 10000 },
    { id: 2, name: "Joker ", invitations: 1, totalAmount: 5000 },
    { id: 3, name: "Riddle", invitations: 3, totalAmount: 15000 },
  ];
  return (
    <div className="referralSummary_card">
      <div className="expenses_list">
        <ul>
          <li className="title_row">
            <p className="name_column  title" style={{ flexBasis: "50%" }}>
              Nombre completo
            </p>
            <p className="invitation_column title" style={{ flexBasis: "20%" }}>
              Invitaciones
            </p>
            <p className="total_column title" style={{ flexBasis: "30%" }}>
              Total recibido $
            </p>
          </li>

          {referralUsersSummary.map((user) => (
            <UserSummary
              key={user.id}
              name={user.name}
              invitations={user.invitations}
              totalAmount={user.totalAmount}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReferralSummaryPage;
