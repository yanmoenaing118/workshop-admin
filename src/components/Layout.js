import AppBar from "./AppBar";
import Navbar from "./Navbar";
import styles from "./../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.appbar}>
        <AppBar />
      </div>
      <div className={styles.sidebar}>
        <Navbar />
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
