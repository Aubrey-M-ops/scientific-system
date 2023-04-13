import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import styles from "./styles.module.scss";
import MyCarousel from "../../components/MyCarousel";
import NewsDisplay from "./components/NewsDisplay";
import ScientificNews from "./components/ScientificNews";
import ScientificRecord from "./components/ScientificRecord";
import { getModule } from "../../api/home";

//FIXME: mock
const response = {
  code: 200,
  msg: "成功",
  bannerData: {
    data: [
      {
        nodeId: 3,
        id: 3,
        title: "报告：我国城市建筑碳排放呈现自北向南、自东向西递减分布状态",
        photo:
          "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/13/a823311f-f709-4257-867c-71aa32238b27_2.png",
        video: "",
        url: "",
        label: "置顶新闻",
      },
      {
        nodeId: 3,
        id: 2,
        title: "报告：我国城市建筑碳排放呈现自北向南、自东向西递减分布状态",
        photo:
          "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/d8309d9b-3bae-4d80-a82f-70adb94479b6_4.jpg",
        video: "",
        url: "http://baidu.com",
        label: "置顶文章",
      },
      {
        nodeId: 3,
        id: 1,
        title: "报告：我国城市建筑碳排放呈现自北向南、自东向西递减分布状态",
        photo:
          "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/651fef46-79c6-47c9-983d-76a3a6ecf2ee_6.png",
        video:
          "http://silk-web.dms.heyfuture.com.cn//file/1/2023/02/07/8969606d-c0e6-4a92-a9e6-a9ee51aa941d.mp4",
        url: "",
        label: "置顶公告",
      },
    ],
  },
  data: [
    {
      nodeName: "丝路新闻",
      nodeId: 6,
      layout: 1,
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/6/topList.json",
      data: {
        data: [
          {
            nodeId: 6,
            id: 50,
            title: "“一带一路”创新发展重大咨询项目启动",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-01-01",
            summary:
              "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
          },
          {
            nodeId: 6,
            id: 49,
            title: "《第三极环境科学评估报告》全球发布",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-01-01",
            summary: "",
          },
          {
            nodeId: 6,
            id: 48,
            title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-01-01",
            summary: "",
          },
          {
            nodeId: 6,
            id: 47,
            title: "丝路环境专项中期检查评审会在京召开",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-01-01",
            summary: "",
          },
          {
            nodeId: 6,
            id: 46,
            title: "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-01",
            summary: "",
          },
          {
            nodeId: 6,
            id: 45,
            title: "《第三极环境科学评估报告》全球发布",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary:
              "我院推动的《工业园区减污降碳协同增效技术导则》《工业园区减污降碳协同绩效评价指南》两项团体标准通过立项评估",
          },
          {
            nodeId: 6,
            id: 44,
            title: "“一带一路”创新发展重大咨询项目启动",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary:
              "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
          },
          {
            nodeId: 6,
            id: 43,
            title: "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
            tag: "丝路新闻",
            url: "https://journal.hep.com.cn/fese/EN/10.1007/s11783-021-1483-6",
            keyword: "",
            publishDate: "2022-05-02",
            summary:
              "国科大资环学院/燕山站肖康团队在《环境科学与工程前沿》发表封面文章",
          },
          {
            nodeId: 6,
            id: 42,
            title: "丝路环境专项中期检查评审会在京召开",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
            tag: "丝路新闻",
            url: "https://www.nature.com/articles/s43017-022-00330-8#citeas",
            keyword: "",
            publishDate: "2022-09-23",
            summary:
              "Nature Reviews | Earth & Environment 发表综述文章：青藏高原草地变化与适应性管理",
          },
          {
            nodeId: 6,
            id: 41,
            title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "",
            summary: "",
          },
        ],
      },
    },
    {
      nodeName: "科考动态",
      nodeId: 25,
      layout: 2,
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/25/topList.json",
      data: {
        data: [
          {
            nodeId: 25,
            id: 28,
            title: "“一带一路”创新发展重大咨询项目启动",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary:
              "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
          },
          {
            nodeId: 25,
            id: 27,
            title: "《第三极环境科学评估报告》全球发布",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 25,
            id: 26,
            title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 25,
            id: 25,
            title: "丝路环境专项中期检查评审会在京召开",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 25,
            id: 24,
            title: "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 25,
            id: 23,
            title: "《第三极环境科学评估报告》全球发布",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 25,
            id: 22,
            title: "“一带一路”创新发展重大咨询项目启动",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary:
              "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
          },
          {
            nodeId: 25,
            id: 21,
            title: "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "",
            summary: "",
          },
          {
            nodeId: 25,
            id: 20,
            title: "《第三极环境科学评估报告》全球发布",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 25,
            id: 19,
            title: "“一带一路”创新发展重大咨询项目启动",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary:
              "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
          },
        ],
      },
    },
    {
      nodeName: "科考实录",
      nodeId: 26,
      layout: 3,
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/26/topList.json",
      data: {
        data: [
          {
            nodeId: 26,
            id: 36,
            title: "“一带一路”创新发展重大咨询项目启动",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary:
              "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
          },
          {
            nodeId: 26,
            id: 35,
            title: "《第三极环境科学评估报告》全球发布",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 26,
            id: 34,
            title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 26,
            id: 33,
            title: "丝路环境专项中期检查评审会在京召开",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 26,
            id: 32,
            title: "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 26,
            id: 31,
            title: "《第三极环境科学评估报告》全球发布",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
          {
            nodeId: 26,
            id: 30,
            title: "“一带一路”创新发展重大咨询项目启动",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary:
              "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
          },
          {
            nodeId: 26,
            id: 29,
            title: "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "",
            summary: "",
          },
          {
            nodeId: 26,
            id: 11,
            title: "“一带一路”创新发展重大咨询项目启动",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary:
              "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
          },
          {
            nodeId: 26,
            id: 8,
            title: "《第三极环境科学评估报告》全球发布",
            author: "中国科学院大学",
            photo:
              "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
            tag: "丝路新闻",
            url: "",
            keyword: "",
            publishDate: "2023-03-06",
            summary: "",
          },
        ],
      },
    },
  ],
};

const HomePage = () => {
  const [data, setData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    document.body.classList.toggle("index-page");
    //   //FIXME: 请求
    //   // getModule().then((response) => {
    //   //   const { bannerData, data } = response;
    //   //   setBannerData(bannerData.data);
    //   //   setData(data);
    //   // });
    const { bannerData, data } = response;
    console.log(bannerData, data, 123123);
    setBannerData(bannerData.data);
    setData(data);

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
            <NewsDisplay data={data[0].data.data} />
          </div>
          <div className={styles.section}>
            <h1>科考动态</h1>
            <ScientificNews data={data[1].data.data} />
          </div>
          <div className={styles.section}>
            <h1>科考实录</h1>
            <ScientificRecord data={data[2].data.data} />
          </div>
        </div>
      </div>
    )
  );
};
export default HomePage;
