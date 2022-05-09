import "./css/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ open }) => {
  return (
    <nav className={open ? "navbar open" : "navbar"} open={open}>
      <ul className="navbar-list">
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "linkActive" : "";
            }}
            to="/"
          >
            Clases
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "linkActive" : "";
            }}
            to="/retos"
          >
            Retos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
