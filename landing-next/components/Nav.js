import navStyles from "../styles/Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <h5 className={navStyles.banner}>Group One Capital Property</h5>
    </nav>
  );
};

export default Nav;
