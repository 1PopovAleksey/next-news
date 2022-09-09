import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next News</title>
        <meta name="description" content="This site made for NEWS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>Main Page</h1>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
