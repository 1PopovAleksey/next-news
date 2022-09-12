import type { NextPage } from "next";
import Link from "next/link";

import NewsCard from "../Cards/NewsCard";

import nature from "../../public/assests/News/nature.png";
import waterfall from "../../public/assests/News/waterfall.png";
import man from "../../public/assests/News/man.png";

import styles from "./News.module.scss";

const NewsPage: NextPage = () => {
  return (
    <section className={styles.background} id={"news"}>
      <div className={styles.container}>
        <div className={styles.offset}>
          <div className={styles.cards}>
            <NewsCard
              image={nature}
              title={"Nature"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={waterfall}
              title={"Find yourself"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={man}
              title={"My life style"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum passages available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={nature}
              title={"Nature"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={waterfall}
              title={"Find yourself"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={man}
              title={"My life style"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum passages available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={nature}
              title={"Nature"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={waterfall}
              title={"Find yourself"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={man}
              title={"My life style"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum passages available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={nature}
              title={"Nature"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={waterfall}
              title={"Find yourself"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum available, but the majority."
              }
              link={""}
            />
            <NewsCard
              image={man}
              title={"My life style"}
              text={
                "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum passages available, but the majority."
              }
              link={""}
            />
          </div>
          <Link href={"/news"}>
            <a className={styles.link}>All news</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
