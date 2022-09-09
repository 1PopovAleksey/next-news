import type { NextPage } from "next";
import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer: NextPage = () => {
  return (
    <footer className={styles.container}>
      <Link href="/news">Next-News</Link>
    </footer>
  );
};

export default Footer;
