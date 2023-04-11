import React from "react";
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

export default function TeamWork() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  React.useEffect(() => {
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
                      style={{ color: "#FFFFFFCC", padding: 30, fontSize: 16 }}
                    >
                      丝路碳库的专家队伍由来自中国科学院大学、中国科学院青藏高原研究所、中国科学院空天信息科学研究院、北京大学、兰州大学等生态、环境、计算机、经济等多学科领域的专家学者组成。
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
                  <div>
                    <h4>野外站台</h4>
                    <div class="platform-list">
                      <div class="platform-item">
                        <a
                          class="platform-wrap"
                          href="/team/content/40/1"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <div class="photo">
                            <img
                              class="img-cover"
                              src="http://silk-web.dms.heyfuture.com.cn//images/1/2023/03/11/0cbfd4db-03cf-41ee-a0df-4f2e26069b28_6.jpg"
                              alt="北京燕山地球关键带国家野外科学观测研究站"
                            />
                            <div class="platform-name font-18">
                              北京燕山地球关键带国家野外科学观测研究站
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="platform-item">
                        <a
                          class="platform-wrap"
                          href="/team/content/40/2"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <div class="photo">
                            <img
                              class="img-cover"
                              src="http://silk-web.dms.heyfuture.com.cn//images/1/2023/03/11/104ff71e-937b-4662-93df-3905cbe942b5_3.jpg"
                              alt="燕山站"
                            />
                            <div class="platform-name font-18">燕山站</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4>实验室</h4>
                    <div class="platform-list">
                      <div class="platform-item">
                        <a
                          class="platform-wrap"
                          href="/team/content/40/3"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <div class="photo">
                            <img
                              class="img-cover"
                              src="http://silk-web.dms.heyfuture.com.cn//images/1/2023/03/13/0be26360-82d4-4bac-9a87-e1c16cf9f44d_4.jpg"
                              alt="低温实验室"
                            />
                            <div class="platform-name font-18">低温实验室</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg="12">
                  <h1 className="text-center">支撑机构</h1>
                  <Row className="row-grid justify-content-center">
                    <Col lg="3">
                      <div className="info" style={{ paddingTop: "20%" }}>
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">
                          1、中国科学院空天信息创新研究院
                        </h4>
                        <hr className="line-primary" />
                        <p>
                          中国科学院空天信息创新研究院，中科院下属研究单位，在中国科学院电子学研究所、遥感与数字地球研究所、光电研究院的基础上整合组建，于2019年4月由中央编办批准成立。空天院致力于建设中国科学院大学电子学院和光电学院，形成科教融合教育科研新机制，成为
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info" style={{ paddingTop: "20%" }}>
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">
                          2、中国科学院青藏高原研究所
                        </h4>
                        <hr className="line-warning" />
                        <p>
                          中国科学院青藏高原研究所（以下简称“青藏高原所”）于2003年12月成立，是中科院党组根据国家经济社会发展重大战略需求和国际科学前沿发展趋势，在知识创新工程科技布局和组织结构调整中成立的研究所之一，是目前国内唯一专门从事青藏高原综合科学研究的国立研究机构。青藏高原所认真贯彻落实党中央和院党组的决策部署
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info" style={{ paddingTop: "20%" }}>
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <h4 className="info-title">
                          1、中国科学院空天信息创新研究院
                        </h4>
                        <hr className="line-primary" />
                        <p>
                          中国科学院空天信息创新研究院，中科院下属研究单位，在中国科学院电子学研究所、遥感与数字地球研究所、光电研究院的基础上整合组建，于2019年4月由中央编办批准成立。空天院致力于建设中国科学院大学电子学院和光电学院，形成科教融合教育科研新机制，成为
                        </p>
                      </div>
                    </Col>
                    <Col lg="3">
                      <div className="info" style={{ paddingTop: "20%" }}>
                        <div className="icon icon-warning">
                          <i className="tim-icons icon-chart-pie-36" />
                        </div>
                        <h4 className="info-title">
                          2、中国科学院青藏高原研究所
                        </h4>
                        <hr className="line-warning" />
                        <p>
                          中国科学院青藏高原研究所（以下简称“青藏高原所”）于2003年12月成立，是中科院党组根据国家经济社会发展重大战略需求和国际科学前沿发展趋势，在知识创新工程科技布局和组织结构调整中成立的研究所之一，是目前国内唯一专门从事青藏高原综合科学研究的国立研究机构。青藏高原所认真贯彻落实党中央和院党组的决策部署
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
