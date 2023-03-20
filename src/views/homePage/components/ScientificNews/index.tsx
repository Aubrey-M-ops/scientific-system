import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
} from "reactstrap";
import styles from "../../styles.module.scss";
const ScientificNews = () => {
  return (
    <div className="section section-signup">
      <Container style={{ width: "70%" }}>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className={styles.sciInfo}>
          <div className={styles.leftInfo}>
            <h2>“一带一路”创新发展重大咨询项目启动</h2>
            <h4 className="description" style={{ color: "#9A9A9A" }}>
              3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...
            </h4>
            <div className="btn-wrapper">
              <Button
                className="btn-round"
                color="primary"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                了解详情👉
              </Button>
              <Button
                className="btn-simple btn-round"
                color="primary"
                rel="noopener noreferrer"
                size="lg"
                target="_blank"
                //   onClick={() => {
                //     setShowPreview(!showPreview);
                //   }}
              >
                查看更多
              </Button>
            </div>
          </div>
          <div className={styles.rightCards}>
            卡片抽成组建 这里放和上面一样的卡片
            {/* <Card className="card-register">
              <CardHeader>
                <CardImg
                  alt="..."
                  src={require("@/assetsimg/square-purple-1.png")}
                />
                <CardTitle tag="h4">More</CardTitle>
              </CardHeader>
              <CardBody></CardBody>
              <CardFooter>
                <Button className="btn-round" color="primary" size="lg">
                  Get Started
                </Button>
              </CardFooter>
            </Card> */}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ScientificNews;
