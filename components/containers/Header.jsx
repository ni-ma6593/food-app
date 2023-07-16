import Link from "next/link";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.bb}>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href={"/"}>Florence</Link>
        </div>
        <div className={styles.right}>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/categories"}>Categories</Link>
        </div>
      </header>
    </div>
  );
};
export default Header;
