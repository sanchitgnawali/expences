import "./Navbar.css";
import { Link } from "react-router-dom";
import { useLogout } from "./../hooks/useLogout";

export default function Navbar() {
  const { logout } = useLogout();

  return (
    <nav className="navbar">
      <ul>
        <li className="title">
          <Link to="/">myExpences</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>

        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
