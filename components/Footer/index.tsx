import type { NextPage } from "next";
import Link from "next/link";

import styles from "./Footer.module.scss";

const Footer: NextPage = () => {
  return (
    <footer className={styles.background}>
      <div className={styles.container}>
        <div className={styles.offset}>
          <div className={styles.content}>
            <h2>Project made on Next!</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
