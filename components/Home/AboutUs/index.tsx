import type { NextPage } from "next";
import { useId } from "react";

import Title from "../../Title";
import AboutUsCard from "../../Cards/AboutUsCard";

import man_news from "../../../public/assests/AboutUs/man-news.png";
import man_calling from "../../../public/assests/AboutUs/man-calling.png";

import styles from "./AboutUs.module.scss";

const cards = [
  {
    image: man_news,
    title: "Our story",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' uncover.",
    link: "",
  },
  {
    image: man_calling,
    title: "Our story",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' uncover.",
    link: "",
  },
];

const id = useId;

const AboutUs: NextPage = () => {
  return (
    <section className={styles.background} id={"about-us"}>
      <div className={styles.container}>
        <div className={styles.offset}>
          <div className={styles.background_title}>
            <Title title="About us" />
          </div>
          <div className={styles.cards}>
            {cards.map((card, index) => (
              <AboutUsCard
                key={`${id}-${index}`}
                image={card.image}
                title={card.title}
                text={card.text}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
