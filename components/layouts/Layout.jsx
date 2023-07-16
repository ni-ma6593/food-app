import styles from "./Layout.module.css";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
