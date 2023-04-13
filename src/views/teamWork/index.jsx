import React, { useState, useEffect } from "react";
import "./styles.scss";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { getModule } from "../../api/team";

//FIXME: mock
const response = {
  code: 200,
  msg: "成功",
  data: [
    {
      nodeName: "专家队伍",
      nodeId: 32,
      type: "specialist",
      listJson: "http://silk-web.dms.heyfuture.com.cn//json/32/specialist.json",
      data: {
        summary:
          "丝路碳库的专家队伍由来自中国科学院大学、中国科学院青藏高原研究所、中国科学院空天信息科学研究院、北京大学、兰州大学等生态、环境、计算机、经济等多学科领域的专家学者组成。",
        list: [
          {
            nodeId: 31,
            id: 5,
            title: "两院院士",
            summary: "1地质与地球物理研究、新生代地质与古气候学研究",
            child: [],
          },
          {
            nodeId: 31,
            id: 6,
            title: "研究人员",
            summary: "丝路环境专项中期检查评审会在京召开",
            child: [],
          },
        ],
      },
    },
    {
      nodeName: "平台与设施",
      nodeId: 40,
      type: "platform",
      listJson: "http://silk-web.dms.heyfuture.com.cn//json/40/platform.html",
      data: {
        list: [
          {
            nodeName: "野外站台",
            nodeId: 41,
            listJson:
              "http://silk-web.dms.heyfuture.com.cn//json/41/wild_station.json",
            data: {
              list: [
                {
                  nodeId: "41",
                  id: 1,
                  name: "北京燕山地球关键带国家野外科学观测研究站",
                  keyword: "",
                  photo:
                    "http://silk-web.dms.heyfuture.com.cn//images/1/2023/03/11/0cbfd4db-03cf-41ee-a0df-4f2e26069b28_6.jpg",
                  tag: "北京燕山地球关键带国家野外科学观测研究站",
                  publishDate: "2019-09-16",
                  summary: "",
                },
                {
                  nodeId: "41",
                  id: 2,
                  name: "燕山站",
                  keyword: "",
                  photo:
                    "http://silk-web.dms.heyfuture.com.cn//images/1/2023/03/11/104ff71e-937b-4662-93df-3905cbe942b5_3.jpg",
                  tag: "燕山站",
                  publishDate: "2019-09-09",
                  summary: "",
                },
              ],
            },
          },
          {
            nodeName: "实验室",
            nodeId: 42,
            listJson: "http://silk-web.dms.heyfuture.com.cn//json/42/lab.json",
            data: {
              list: [
                {
                  nodeId: "42",
                  id: 3,
                  name: "低温实验室",
                  keyword: "",
                  photo:
                    "http://silk-web.dms.heyfuture.com.cn//images/1/2023/03/13/0be26360-82d4-4bac-9a87-e1c16cf9f44d_4.jpg",
                  tag: "",
                  publishDate: "2023-03-13",
                  summary: "",
                },
              ],
            },
          },
        ],
      },
    },
    {
      nodeName: "支撑机构",
      nodeId: 46,
      type: "support",
      listJson: "http://silk-web.dms.heyfuture.com.cn//json/46/support.json",
      data: {
        list: [
          {
            nodeId: 46,
            nodeName: "支撑机构",
            id: 4,
            name: "中国科学院空天信息创新研究院",
            summary:
              "中国科学院空天信息创新研究院，中科院下属研究单位，在中国科学院电子学研究所、遥感与数字地球研究所、光电研究院的基础上整合组建，于2019年4月由中央编办批准成立。空天院致力于建设中国科学院大学电子学院和光电学院，形成科教融合教育科研新机制，成为",
            url: "",
          },
          {
            nodeId: 46,
            nodeName: "支撑机构",
            id: 3,
            name: "中国科学院青藏高原研究所",
            summary:
              "中国科学院青藏高原研究所（以下简称“青藏高原所”）于2003年12月成立，是中科院党组根据国家经济社会发展重大战略需求和国际科学前沿发展趋势，在知识创新工程科技布局和组织结构调整中成立的研究所之一，是目前国内唯一专门从事青藏高原综合科学研究的国立研究机构。青藏高原所认真贯彻落实党中央和院党组的决策部署",
            url: "",
          },
          {
            nodeId: 46,
            nodeName: "支撑机构",
            id: 2,
            name: "燕山地球关键带国家野外科学观测研究站",
            summary:
              "北京燕山地球关键带国家野外科学观测研究站，国家野外科学观测研究站。2021年10月，被科技部批准为国家野外科学观测研究站。",
            url: "",
          },
          {
            nodeId: 46,
            nodeName: "支撑机构",
            id: 1,
            name: "中国科学院大学",
            summary:
              "中国科学院大学资源与环境学院的前身是中国科学院研究生院资源与环境学院。2012年6月27日，教育部关于同意中国科学院研究生院更名为中国科学院大学的函（教发函[2012]106号），同意中国科学院研究生院更名为中国科学院大学。",
            url: "",
          },
        ],
      },
    },
  ],
};

export default function TeamWork() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [data, setData] = useState([]);
  const getModuleData = () => {
    // getModule().then(response => {
    //   const { data } = response
    //   setData(data)
    // })
    const { data } = response;
    setData(data);
  };
  useEffect(() => {
    getModuleData();
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    data.length && (
      <>
        <div className="wrapper">
          <div style={{ marginTop: 250 }}>
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: squares7and8 }}
                    />
                    <Card
                      className="card-register"
                      style={{ height: 400, borderRadius: "10px" }}
                    >
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("../../assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">专家队伍</CardTitle>
                      </CardHeader>
                      <CardBody
                        style={{
                          color: "#FFFFFFCC",
                          padding: 30,
                          fontSize: 16,
                        }}
                      >
                        {data[0].data.summary}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: squares1to6 }}
                />
                <Row className="justify-content-center">
                  <Col style={{ marginTop: 100 }}>
                    <h1 className="text-center">平台设施</h1>
                    {data[1].data.list.map((item) => {
                      return (
                        <div>
                          <h4>{item.nodeName}</h4>
                          <div class="platform-list">
                            {item.data.list.map((photoItem) => {
                              return (
                                <div class="platform-item">
                                  <a
                                    class="platform-wrap"
                                    //FIXME: replace url
                                    href="/team/content/40/1"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    <div class="photo">
                                      <img
                                        class="img-cover"
                                        src={photoItem.photo}
                                      />
                                      <div class="platform-name font-18">
                                        {photoItem.name}
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col lg="12">
                    <h1 className="text-center">支撑机构</h1>
                    <Row className="row-grid justify-content-center">
                      {data[2].data.list.map((item, index) => {
                        return (
                          <Col lg="3">
                            <div className="info" style={{ paddingTop: "20%" }}>
                              <div
                                className={`icon icon-${
                                  (index + 1) % 2 ? "primary" : "warning"
                                }`}
                              >
                                <i className="tim-icons icon-money-coins" />
                              </div>
                              <h4 className="info-title">
                                {`${index + 1}、${item.name}`}
                              </h4>
                              <hr className="line-primary" />
                              <p>{item.summary}</p>
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </>
    )
  );
}
