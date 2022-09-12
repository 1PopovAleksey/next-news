import type { NextPage } from "next";
import Link from "next/link";

import styles from "./Header.module.scss";

const Header: NextPage = () => {
  return (
    <header className={styles.background}>
      <div className={styles.container}>
        <div className={styles.offset}>
          <Link href={"/"}>
            <a className={styles.logo}>News</a>
          </Link>
          <nav className={styles.nav}>
            <Link href={"/#news"}>
              <a>news</a>
            </Link>
            <Link href={"/#about-us"}>
              <a>about us</a>
            </Link>
            <Link href={"/#contacts"}>
              <a>contacts</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
