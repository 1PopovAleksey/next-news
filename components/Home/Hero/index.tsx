import type { NextPage } from "next";
import Link from "next/link";

import styles from "./Hero.module.scss";

const Hero: NextPage = () => {
  return (
    <section className={styles.background} id={"hero"}>
      <div className={styles.container}>
        <div className={styles.offset}>
          <div className={styles.content}>
            <h1>Best News Forever</h1>
            <p>
              Do you want to be always up to date? Then come to us, because we
              follow the latest news and trends around the world and immediately
              inform you!
            </p>
            <Link href={"/news"}>
              <a className={styles.link}>watch the news</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
