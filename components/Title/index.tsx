import type { NextPage } from "next";

import styles from "./Title.module.scss";

interface ITitle {
  title: string;
}

const Title: NextPage<ITitle> = ({ title }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
    </>
  );
};

export default Title;
