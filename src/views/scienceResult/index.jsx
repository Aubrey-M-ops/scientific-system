import React, { memo, useState } from "react";
import "./styles.scss";
import RESULT_PART from "../../constant/result";
import { useEffect } from "react";
import Award from "./components/Award";
import Essay from "./components/Essay";
import Data from "./components/Data";
import Knowledge from "./components/Knowledge";
import Project from "./components/Project";
import { getModule } from "../../api/achievement";

const response = {
  code: 200,
  msg: "成功",
  data: [
    {
      nodeName: "科研论文",
      nodeId: 17,
      type: "kylw",
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/17/list_1.json",
      data: {
        code: 200,
        msg: "成功",
        data: {
          nodeId: 17,
          nodeName: "科研论文",
          list: [
            {
              nodeId: 17,
              id: 26,
              name: "Plant organic N uptake maintains species dominance under long-term warming. PLANT AND SOIL, 2018, 通讯作者.",
              level: "国家级",
              team: "",
              mag: " 中国知网CNKI",
              author: " 中国知网CNKI",
              photo: "",
              tag: "",
              url: "http://silk-web.dms.heyfuture.com.cn/achievements/17",
              label: "",
              year: "2023",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 17,
              id: 24,
              name: "Climatic resources mediate the shape and strength of grassland productivity-richness relationships from local to regional scales, AGRICULTURE, ECOSYSTEMS & ENVIRONMENT, 2022 (...",
              level: "国家级",
              team: "",
              mag: "中国知网CNKI",
              author: "王艳芬 王一",
              photo: "",
              tag: "",
              url: "",
              label: "",
              year: "",
              publishDate: "2023-03-06",
              summary: "",
            },
            {
              nodeId: 17,
              id: 23,
              name: "Abiotic and biotic controls of soil dissolved organic nitrogen along a precipitation gradient on the Tibetan plateau, PLANT AND SOIL, 2021, 通讯作者.",
              level: "",
              team: "",
              mag: "万方数据库",
              author: "王艳芬；薛凯；郝彦滨；胡容海",
              photo: "",
              tag: "",
              url: "",
              label: "",
              year: "",
              publishDate: "2023-03-06",
              summary: "",
            },
            {
              nodeId: 17,
              id: 22,
              name: "Abiotic and biotic controls of soil dissolved organic nitrogen along a precipitation gradient on the Tibetan plateau, PLANT AND SOIL, 2021, 通讯作者.",
              level: "",
              team: "",
              mag: "万方数据库",
              author: "王艳芬；薛凯；郝彦滨；胡容海",
              photo: "",
              tag: "",
              url: "",
              label: "",
              year: "",
              publishDate: "2023-03-06",
              summary: "",
            },
            {
              nodeId: 17,
              id: 21,
              name: "Climatic resources mediate the shape and strength of grassland productivity-richness relationships from local to regional scales, AGRICULTURE, ECOSYSTEMS & ENVIRONMENT, 2022 (...",
              level: "",
              team: "",
              mag: "中国知网CNKI",
              author: "王艳芬；薛凯；郝彦滨；胡容海",
              photo: "",
              tag: "",
              url: "",
              label: "",
              year: "",
              publishDate: "2023-03-06",
              summary: "",
            },
            {
              nodeId: 17,
              id: 20,
              name: "Abiotic and biotic controls of soil dissolved organic nitrogen along a precipitation gradient on the Tibetan plateau, PLANT AND SOIL, 2021, 通讯作者.",
              level: "",
              team: "",
              mag: "万方数据库",
              author: "王艳芬；薛凯；郝彦滨；胡容海",
              photo: "",
              tag: "",
              url: "",
              label: "",
              year: "",
              publishDate: "2023-03-06",
              summary: "",
            },
            {
              nodeId: 17,
              id: 19,
              name: "Climatic resources mediate the shape and strength of grassland productivity-richness relationships from local to regional scales, AGRICULTURE, ECOSYSTEMS & ENVIRONMENT, 2022 (...",
              level: "",
              team: "",
              mag: "中国知网CNKI",
              author: "王艳芬；薛凯；郝彦滨；胡容海",
              photo: "",
              tag: "",
              url: "",
              label: "",
              year: "",
              publishDate: "2023-03-06",
              summary: "",
            },
            {
              nodeId: 17,
              id: 18,
              name: "Climatic resources mediate the shape and strength of grassland productivity-richness relationships from local to regional scales, AGRICULTURE, ECOSYSTEMS & ENVIRONMENT, 2022 (...",
              level: "",
              team: "",
              mag: "中国知网CNKI",
              author: "王艳芬；薛凯；郝彦滨；胡容海",
              photo: "",
              tag: "",
              url: "",
              label: "",
              year: "",
              publishDate: "2023-03-06",
              summary: "",
            },
            {
              nodeId: 17,
              id: 17,
              name: "Abiotic and biotic controls of soil dissolved organic nitrogen along a precipitation gradient on the Tibetan plateau, PLANT AND SOIL, 2021, 通讯作者.",
              level: "",
              team: "",
              mag: "万方数据库",
              author: "王艳芬；薛凯；郝彦滨；胡容海",
              photo: "",
              tag: "",
              url: "",
              label: "",
              year: "",
              publishDate: "2023-03-06",
              summary: "",
            },
            {
              nodeId: 17,
              id: 16,
              name: "Abiotic and biotic controls of soil dissolved organic nitrogen along a precipitation gradient on the Tibetan plateau, PLANT AND SOIL, 2021, 通讯作者.",
              level: "",
              team: "",
              mag: "万方数据库",
              author: "王艳芬；薛凯；郝彦滨；胡容海",
              photo: "",
              tag: "",
              url: "",
              label: "",
              year: "",
              publishDate: "2023-03-06",
              summary: "",
            },
          ],
          total: 25,
          pages: 3,
          nextPage: 2,
          prePage: 0,
        },
      },
    },
    {
      nodeName: "知识产权",
      nodeId: 18,
      type: "zscq",
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/18/list_1.json",
      data: {
        code: 200,
        msg: "成功",
        data: {
          nodeId: 18,
          nodeName: "知识产权",
          list: [
            {
              nodeId: 18,
              id: 3,
              name: "基于区块链与深度学习的非二氧化碳温室气体核算算法优化系统V1.0",
              keywords: "",
              type: "软件著作权",
              number: "123234",
              author: "中国科学院大学",
              photo: "",
              url: "",
              year: "2023",
              summary: "",
            },
            {
              nodeId: 18,
              id: 2,
              name: "基于Web3.0架构的温室气体跨链交易区块链生态系统V1.0",
              keywords: "",
              type: "国家发明专利",
              number: "111",
              author: "",
              photo: "",
              url: "",
              year: "2023",
              summary:
                "著作权人：中国科学院大学；登记号：2021SR459718；开发完成日期：2021年04月20日",
            },
            {
              nodeId: 18,
              id: 1,
              name: "基于人工智能的大气污染物全生命周期溯源及环境司法鉴定平台V1.0",
              keywords: "",
              type: "国家专利",
              number: "12123",
              author: "",
              photo: "",
              url: "",
              year: "2022",
              summary:
                "著作权人：中国科学院大学；登记号：2021SR459718；开发完成日期：2021年04月20日",
            },
          ],
          total: 3,
          pages: 1,
          nextPage: 0,
          prePage: 0,
        },
      },
    },
    {
      nodeName: "科研项目",
      nodeId: 16,
      type: "kyxm",
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/16/list_1.json",
      data: {
        code: 200,
        msg: "成功",
        data: {
          nodeId: 16,
          nodeName: "科研项目",
          list: [
            {
              nodeId: 16,
              id: 3,
              name: "国科大研究团队发现土壤真菌稀有类群与植物群落的关联性更强",
              keywords: "",
              type: "",
              number: "",
              author: "",
              people: "",
              executionStart: "2022",
              executionEnd: "2023",
              level: "国家级",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/03/09/a5f90658-5dfc-4c5a-978c-71deaba881e7_5.jpg",
              url: "",
              year: "",
              summary: "",
            },
            {
              nodeId: 16,
              id: 2,
              name: "国科大研究团队发现土壤真菌稀有类群与植物群落的关联性更强",
              keywords: "",
              type: "",
              number: "",
              author: "王艳芬",
              people: "薛凯；郝彦滨；胡容海",
              executionStart: "2023",
              executionEnd: "2023",
              level: "中国科学院先导专项",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/03/06/19349e0f-2aed-47d8-a377-7bf6177e445a_6.jpg",
              url: "",
              year: "2023",
              summary:
                "2023年1月5日，中国科学院大学资源与环境学院研究团队在国际知名环境微生物学期刊Applied and Environmental Microbiology上发表题为“Plant Community Associates with Rare Rather than Abu ...",
            },
            {
              nodeId: 16,
              id: 1,
              name: "国科大研究团队发现青藏高原高寒草甸退化加快了土壤线虫群落的时间周转率",
              keywords: "",
              type: "",
              number: "",
              author: "王艳芬",
              people: "薛凯；郝彦滨；胡容海",
              executionStart: "2023",
              executionEnd: "2023",
              level: "国家级",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/03/06/17baf31d-20f2-4c2a-97ca-e5c3f73e3809_5.jpg",
              url: "",
              year: "",
              summary: "",
            },
          ],
          total: 3,
          pages: 1,
          nextPage: 0,
          prePage: 0,
        },
      },
    },
    {
      nodeName: "数据汇交",
      nodeId: 22,
      type: "sjhj",
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/22/list_1.json",
      data: {
        code: 200,
        msg: "成功",
        data: {
          nodeId: 22,
          nodeName: "数据汇交",
          list: [
            {
              nodeId: 22,
              id: 3,
              name: "多链融合的非CO2温室气体核算区块链体系架构与交易并发处理研究",
              keywords: "",
              type: "",
              team: "",
              size: "",
              photo: "",
              url: "",
              year: "",
              summary: "",
            },
            {
              nodeId: 22,
              id: 2,
              name: "国科大研究团队发现青藏高原高寒草甸退化加快了土壤线虫群落的时间周转率",
              keywords: "",
              type: "",
              team: "",
              size: "1MB",
              photo: "",
              url: "",
              year: "2023",
              summary:
                "2023年1月5日，中国科学院大学资源与环境学院研究团队在国际知名环境微生物学期刊Applied and Environmental Microbiology上发表题为“Plant Community Associates with Rare Rather than Abundant ...",
            },
            {
              nodeId: 22,
              id: 1,
              name: "国科大研究团队发现青藏高原高寒草甸退化加快了土壤线虫群落的时间周转率",
              keywords: "",
              type: "待定一",
              team: "国科大",
              size: "22kb",
              photo: "",
              url: "",
              year: "2022",
              summary:
                "2023年1月5日，中国科学院大学资源与环境学院研究团队在国际知名环境微生物学期刊Applied and Environmental Microbiology上发表题为“Plant Community Associates with Rare Rather than Abundant ...",
            },
          ],
          total: 3,
          pages: 1,
          nextPage: 0,
          prePage: 0,
        },
      },
    },
    {
      nodeName: "获奖与评价",
      nodeId: 39,
      type: "hjypj",
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/39/list_1.json",
      data: {
        code: 200,
        msg: "成功",
        data: {
          nodeId: 39,
          nodeName: "获奖与评价",
          list: [
            {
              nodeId: 39,
              id: 2,
              name: "多链融合的非CO2温室气体核算区块链体系架构与交易并发处理研究",
              type: "行业协会奖",
              level: "一等奖",
              award: "自然科学奖",
              year: "2022",
              file: "http://silk-web.dms.heyfuture.com.cn//file/1/2023/03/10/e920ca38-e2df-470c-936c-56813514fede.pdf",
              summary: "",
            },
            {
              nodeId: 39,
              id: 1,
              name: "高级氧化法烟气多污染协同控制理论与技术研究",
              type: "省部级",
              level: "",
              award: "自然科学奖",
              year: "2023",
              file: "http://silk-web.dms.heyfuture.com.cn//file/1/2023/03/10/17f8c881-8c3b-4bf5-9530-2052478a721f.pdf",
              summary: "",
            },
          ],
          total: 2,
          pages: 1,
          nextPage: 0,
          prePage: 0,
        },
      },
    },
  ],
};

const ScienceResult = memo(() => {
  const [currentPart, setCurrentPart] = useState(RESULT_PART.ESSAY);
  const [currentPanel, setCurrentPanel] = useState();
  const [data, setData] = useState([]);

  const getModuleData = () => {
    // getModule().then((response) => {
    //   const { data } = response;
    //   setData(data);
    // });
    const { data } = response;
    setData(data);
  };
  // useEffect(() => {
  //   getModuleData();
  //   console.log(data, 11);
  // }, []);

  useEffect(() => {
    getModuleData();
    if (data.length) {
      switch (currentPart) {
        case RESULT_PART.ESSAY:
          setCurrentPanel(<Essay data={data?.[0].data.data.list} />);
          break;
        case RESULT_PART.KNOWLEDGE:
          setCurrentPanel(<Knowledge data={data?.[1].data.data.list} />);
          break;
        case RESULT_PART.PROJECT:
          setCurrentPanel(<Project data={data?.[2].data.data.list} />);
          break;
        case RESULT_PART.DATA:
          setCurrentPanel(<Data data={data?.[3].data.data.list} />);
          break;
        case RESULT_PART.AWARD:
          setCurrentPanel(<Award data={data?.[4].data.data.list} />);
          break;
        default:
          break;
      }
    }
  }, [currentPart, data]);

  return (
    data.length && (
      <div className="achievements-page">
        <div className="image-bg">
          <img
            src={require("../../assets/img/kycg_banner.jpeg")}
            alt="科研成果"
          />
        </div>
        <div className="tabs-page">
          <div className="container">
            <div className="left-tab">
              <div>
                <div className="tabs-nav-list">
                  <div className="tab-item">
                    <a
                      aria-current="page"
                      className={`tab-link font-18 ${
                        currentPart === RESULT_PART.ESSAY && "active"
                      }`}
                      // href="/achievements/17"
                      onClick={() => {
                        setCurrentPart(RESULT_PART.ESSAY);
                      }}
                    >
                      <span className="tab-name">科研论文</span>
                      <span className="iconfont icon-xiala"></span>
                    </a>
                  </div>
                  <div className="tab-item">
                    <a
                      className={`tab-link font-18 ${
                        currentPart === RESULT_PART.KNOWLEDGE && "active"
                      }`}
                      // href="/achievements/18"
                      onClick={() => {
                        setCurrentPart(RESULT_PART.KNOWLEDGE);
                      }}
                    >
                      <span className="tab-name">知识产权</span>
                      <span className="iconfont icon-xiala"></span>
                    </a>
                  </div>
                  <div className="tab-item">
                    <a
                      className={`tab-link font-18 ${
                        currentPart === RESULT_PART.PROJECT && "active"
                      }`}
                      // href="/achievements/16"
                      onClick={() => {
                        setCurrentPart(RESULT_PART.PROJECT);
                      }}
                    >
                      <span className="tab-name">科研项目</span>
                      <span className="iconfont icon-xiala"></span>
                    </a>
                  </div>
                  <div className="tab-item">
                    <a
                      className={`tab-link font-18 ${
                        currentPart === RESULT_PART.DATA && "active"
                      }`}
                      // href="/achievements/22"
                      onClick={() => {
                        setCurrentPart(RESULT_PART.DATA);
                      }}
                    >
                      <span className="tab-name">数据汇交</span>
                      <span className="iconfont icon-xiala"></span>
                    </a>
                  </div>
                  <div className="tab-item">
                    <a
                      className={`tab-link font-18 ${
                        currentPart === RESULT_PART.AWARD && "active"
                      }`}
                      // href="/achievements/39"
                      onClick={() => {
                        setCurrentPart(RESULT_PART.AWARD);
                      }}
                    >
                      <span className="tab-name">获奖与评价</span>
                      <span className="iconfont icon-xiala"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-list">{currentPanel}</div>
          </div>
        </div>
      </div>
    )
  );
});
export default ScienceResult;
