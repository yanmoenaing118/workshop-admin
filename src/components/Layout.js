import AppBar from "./AppBar";
import Navbar from "./Navbar";
import styles from "./../styles/Layout.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "./../lib/useAuth";

export default function Layout({ children }) {
  const { token } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    token && (
      <div className={styles.layout}>
        <div className={styles.appbar}>
          <AppBar />
        </div>
        <div className={styles.sidebar}>
          <Navbar />
        </div>
        <main className={styles.main}>{children}</main>
      </div>
    )
  );
}
