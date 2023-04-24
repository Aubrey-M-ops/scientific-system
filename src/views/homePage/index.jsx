import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./styles.module.scss";
import MyCarousel from "../../components/MyCarousel";
import NewsDisplay from "./components/NewsDisplay";
import ScientificNews from "./components/ScientificNews";
import ScientificRecord from "./components/ScientificRecord";
import { getModule } from "../../api/home";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    document.body.classList.toggle("index-page");
    getModule().then((response) => {
      const { bannerData, data } = response;
      console.log(bannerData, data, "bbbb");
      setBannerData(bannerData.data);
      setData(data);
    });

    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    bannerData.length &&
    data.length && (
      <div className="wrapper">
        <PageHeader />
        <div className="main" style={{ padding: "0 40px" }}>
          <div className={styles.section}>
            <h1>置顶新闻</h1>
            <MyCarousel bannerData={bannerData} />
          </div>
          <div className={styles.section}>
            <h1>丝路新闻</h1>
            <NewsDisplay data={data?.[0]?.data} />
          </div>
          <div className={styles.section}>
            <h1>科考动态</h1>
            <ScientificNews data={data?.[1]?.data} />
          </div>
          <div className={styles.section}>
            <h1>科考实录</h1>
            <ScientificRecord data={data?.[2]?.data} />
          </div>
        </div>
      </div>
    )
  );
};
export default HomePage;
