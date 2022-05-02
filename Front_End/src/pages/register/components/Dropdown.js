import { ReactComponent as Arrow } from "../../../assets/dropdown-arrow-icon.svg";
import { useOutsideAlerter } from "../../../hooks/outsideAlerter";

const style_selected = {
  background: "#F7F7F7",
};

const Dropdown = ({ selected, setSelected }) => {
  const { visible, setVisible, ref } = useOutsideAlerter(false);

  const handleOpenDropdown = () => {
    setVisible((prevState) => !prevState);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSelected(e.target.text);
    handleOpenDropdown();
  };

  const options = [
    { id: 1, name: "Masculino" },
    { id: 2, name: "Femenino" },
  ];

  return (
    <div
      ref={ref}
      className={`dropdown ${visible ? "active" : ""}`}
      data-dropdown
    >
      <button
        data-testid="sexDropdown"
        onClick={handleOpenDropdown}
        className="link text_bg"
        data-dropdown-button
      >
        {selected}
        <Arrow />
      </button>
      <div data-testid="dropdownMenu" className="dropdown-menu ">
        <div className="dropdown-links">
          {options.map((option) => (
            // eslint-disable-next-line
            <a
              onClick={handleChange}
              style={option === selected ? style_selected : null}
              className="link text_bg"
              key={option.id}
            >
              {option.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
