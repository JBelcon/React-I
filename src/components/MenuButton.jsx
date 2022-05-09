import "./css/menuButton.css";

const MenuButton = ({ open, unfoldMenu }) => {
  return (
    <>
      {!open ? (
        <button onClick={unfoldMenu} className="nav-btn">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>
      ) : (
        <button onClick={unfoldMenu} className="nav-btn open">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>
      )}
    </>
  );
};

export { MenuButton };
