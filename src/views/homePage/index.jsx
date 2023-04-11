import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./styles.module.scss";
import MyCarousel from "../../components/MyCarousel";
import NewsDisplay from "./components/NewsDisplay";
import ScientificNews from "./components/ScientificNews";
import ScientificRecord from "./components/ScientificRecord";

const HomePage = () => {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <div className="wrapper">
      <PageHeader />
      <div className="main" style={{ padding: "0 40px" }}>
        <div className={styles.section}>
          <h1>置顶新闻</h1>
          <MyCarousel />
        </div>
        <div className={styles.section}>
          <h1>丝路新闻</h1>
          <NewsDisplay />
        </div>
        <div className={styles.section}>
          <h1>科考动态</h1>
          <ScientificNews />
        </div>
        <div className={styles.section}>
          <h1>科考实录</h1>
          <ScientificRecord />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
