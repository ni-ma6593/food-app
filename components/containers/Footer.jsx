import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.bt}>
      <footer className={styles.footer}>
        <Link href={"/"}>Florence</Link>
      </footer>
    </div>
  );
};
export default Footer;
