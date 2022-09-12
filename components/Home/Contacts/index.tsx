import type { NextPage } from "next";

import Title from "../../Title";

import styles from "./Contacts.module.scss";

const Contacts: NextPage = () => {
  return (
    <section className={styles.background} id={"contacts"}>
      <div className={styles.container}>
        <div className={styles.offset}>
          <Title title="Contacts" />
          <ul className={styles.list}>
            <li>
              Email:
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </li>
            <li>
              Telegram:
              <a href="https://t.me/Example">@Example</a>
            </li>
            <li>
              Telephone:
              <a href="tel:+79999999999">+7 (999) 999 - 99 - 99</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
