import type { NextPage } from "next";
import Link from "next/link";
import { useId } from "react";

import Title from "../../Title";
import NewsCard from "../../Cards/NewsCard";

import nature from "../../../public/assests/News/nature.png";
import waterfall from "../../../public/assests/News/waterfall.png";
import man from "../../../public/assests/News/man.png";

import styles from "./News.module.scss";

const cards = [
  {
    image: nature,
    title: "Nature",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum passages available, but the majority.",
    link: "",
  },
  {
    image: waterfall,
    title: "Find yourself",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum passages available, but the majority.",
    link: "",
  },
  {
    image: man,
    title: "My life style",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority. Lorem Ipsum passages available, but the majority.",
    link: "",
  },
];

const id = useId;

const News: NextPage = () => {
  return (
    <section className={styles.background} id={"news"}>
      <div className={styles.container}>
        <div className={styles.offset}>
          <Title title="News" />
          <div className={styles.cards}>
            {cards.map((card, index) => (
              <NewsCard
                key={`${id}-${index}`}
                image={card.image}
                title={card.title}
                text={card.text}
                link={card.link}
              ></NewsCard>
            ))}
          </div>
          <Link href={"/news"}>
            <a className={styles.link}>All news</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;
