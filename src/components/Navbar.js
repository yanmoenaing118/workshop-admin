import { Link } from "react-router-dom";
import styles from "./../styles/Navbar.module.css";
import Logo from "./Logo";

export default function Navbar() {
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
    </nav>
    </>
  );
}
