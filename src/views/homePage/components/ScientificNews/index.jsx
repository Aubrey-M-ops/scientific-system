import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";
import MyCard from "../../../../components/MyCard";
import styles from "../../styles.module.scss";

const previewCards = new Array(6).fill({
  img: "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
  title: "《第三极环境科学评估报告》全球发布",
  footer: "2023-01-01",
});

const ScientificNews = () => {
  return (
    <div className="section">
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
            {console.log(123123, previewCards)}
            {previewCards?.map((card) => (
              <MyCard
                imgSrc={card.img}
                cardTitle={card.title}
                cardFooter={card.footer}
              />
            ))}
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
