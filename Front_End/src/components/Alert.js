const Alert = ({ msg, error }) => {
  const styles = {
    color: error ? "#f5222d" : "#074F71",
  };
  return (
    <div className="alert" style={styles}>
      <p className="text_md">{msg}</p>
    </div>
  );
};

export default Alert;
