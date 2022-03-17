import { Link } from "react-router-dom";
import styles from "./../styles/Navbar.module.css";
import Logo from "./Logo";
import useAuth from "./../lib/useAuth";

export default function Navbar() {
  const { logout } = useAuth();
  return (
    <>
      <Logo />
      <nav className={styles.Navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {["dramas", "songs"].map((link) => (
            <li key={link}>
              <Link to={`/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
        <button onClick={logout}>log out</button>
      </nav>
    </>
  );
}
