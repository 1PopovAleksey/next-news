import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header";
import NewsPage from "../components/News";
import Footer from "../components/Footer";

const News: NextPage = () => {
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="This site made for NEWS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <NewsPage />
      </main>

      <Footer />
    </>
  );
};

export default News;
