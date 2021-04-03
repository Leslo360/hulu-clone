import styles from "../styles/Home.module.css";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
}

export default Layout;
