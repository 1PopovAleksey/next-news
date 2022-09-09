import type { NextPage } from "next";
import Link from "next/link";

import styles from "./Header.module.scss";

const Header: NextPage = () => {
  return (
    <header className={styles.container}>
      <Link href="/news">Next-News</Link>
    </header>
  );
};

export default Header;
