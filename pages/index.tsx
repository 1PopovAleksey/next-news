import type { NextPage } from "next";
import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";

import Hero from "../components/Home/Hero";
import News from "../components/Home/News";
import AboutUs from "../components/Home/AboutUs";
import Contacts from "../components/Home/Contacts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next News</title>
        <meta name="description" content="This site made for NEWS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <News />
        <AboutUs />
        <Contacts />
      </main>

      <Footer />
    </>
  );
};

export default Home;
