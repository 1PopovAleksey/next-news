import type { NextPage } from "next";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import styles from "./News.module.scss";

interface INewsCard {
  image: string | StaticImageData;
  title: string;
  text: string;
  link: string;
}

const NewsCard: NextPage<INewsCard> = ({ image, title, text, link }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} alt="Photo" />
      <div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{text}</p>
          <div className={styles.more}>
            <Link href={link}>
              <a className={styles.link}>More...</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
