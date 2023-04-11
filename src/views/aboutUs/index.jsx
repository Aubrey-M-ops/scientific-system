import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("../../assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States",
  },
  {
    src: require("../../assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States",
  },
  {
    src: require("../../assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States",
  },
];

let ps = null;

export default function AboutUs() {
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="section">
          <Container>
            <Row className="justify-content-between">
              <Col md="6" style={{ paddingTop: "16%" }}>
                <Row className="justify-content-between align-items-center">
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md="5">
                <h1 className="profile-title text-left">丝路碳库简介</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description text-left">
                  丝路沿线大部分国家和地区地处干旱半干旱区或半湿润易干旱区，产业结构普遍单一，经济发展对于油气等资源的依赖性较高，多数国家在粮食安全、消除贫困、可持续生产消费等可持续发展目标上进展较为落后。在气候变化下，日益严重的水资源短缺、干旱区扩张、土地退化等生态环境问题加剧了社会经济发展同环境保护间的权衡关系，“变绿”与“变富”矛盾突出。
                  <br />
                  因此，在“碳达峰碳中和”已成为时代主题的背景下，亟需进一步加强丝路沿线地区碳库的系统性、综合性科学评估，明确其减排增汇潜力，为丝路沿线国家的“碳达峰碳中和”目标的实现提供科学依据和决策支撑。在此背景下，大尺度的碳库、碳汇评估是近年来的科学热点和难点，是实现“双碳”目标的基础。
                  <br />
                  然而，目前丝路区域的碳库、碳汇仍然缺乏科学、系统评估，减排增汇潜力依旧不明。特别是针对自然生态系统，由于缺乏系统的野外观测与尺度推绎方法，限制了对丝路区域陆地生态系统碳汇现状与趋势及潜力的科学认识。在
                  “泛第三极环境变化与绿色丝绸之路建设”A
                  类战略性先导科技专项的支持下，我们通过融合地面观测、生态过程模型、遥感模型等综合性手段，开展了丝路区域碳库、碳汇评估方法创新，具有重要的科学意义。
                  <br />
                </p>
                <div className="btn-wrapper pt-3">
                  <Button
                    className="btn-simple"
                    color="primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-book-bookmark" /> Bookmark
                  </Button>
                  <Button
                    className="btn-simple"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="tim-icons icon-bulb-63" /> Check it!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("../../assets/img/path4.png")}
          />
          <Container
            className="align-items-center"
            style={{ paddingTop: "3vh" }}
          >
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">联系我们</h1>
                <h5 className="text-on-back">02</h5>
                <p className="profile-description">
                  中国科学院大学资源与环境学院 <br />
                  College of Resources and Environment, University of Chinese
                  Academy of Sciences
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="twitter"
                    href="https://twitter.com/creativetim"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="facebook"
                    href="https://www.facebook.com/creativetim"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="dribbble"
                    href="https://dribbble.com/creativetim"
                    id="tooltip951161185"
                    target="_blank"
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip951161185">
                    Follow us
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto" md="4">
                <div
                  className="info info-horizontal"
                  style={{ paddingTop: "30%" }}
                >
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">您可以在这里找到我们</h4>
                    <p>
                      北京市怀柔区雁栖湖东路1号 <br />
                      中国科学院大学（雁栖湖校区） <br />
                      邮政编码：101408
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">也可以线上联系</h4>
                    <p>
                      +86 10 6967 2964 <br />
                      carbonsink@126.com
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
