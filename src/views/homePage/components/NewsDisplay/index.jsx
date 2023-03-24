import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import MyCard from "../../../../components/MyCard";

import styles from "../../styles.module.scss";

const previewCards = [
  {
    img: "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
    title: "《第三极环境科学评估报告》全球发布",
    footer: "2023-01-01 东北大学软件学院",
  },
  {
    img: "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
    title: "《第三极环境科学评估报告》全球发布",
    footer: "2023-01-01 东北大学软件学院",
  },
  {
    img: "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
    title: "《第三极环境科学评估报告》全球发布",
    footer: "2023-01-01 东北大学软件学院",
  },
];

const NewsDisplay = () => {
  const [showPreview, setShowPreview] = useState(true);
  return (
    <Container style={{ width: "70%" }}>
      <Row className={styles.newsRow}>
        <div className={styles.infoPart}>
          <h2 className="title">“一带一路”创新发展重大咨询项目启动</h2>
          <h4 className="description" style={{ marginBottom: "50px" }}>
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
              查看全部新闻
            </Button>
            <Button
              className="btn-simple btn-round"
              color="primary"
              rel="noopener noreferrer"
              size="lg"
              target="_blank"
              onClick={() => {
                setShowPreview(!showPreview);
              }}
            >
              {showPreview ? "收回👆" : "预览更多👇"}
            </Button>
          </div>
        </div>

        <div className="blur-hover">
          <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons">
            <div className="icons-container blur-item on-screen mt-5">
              {/* <img
                  alt="..."
                  src="http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg"
                  style={{ width: 600, height: 400 }}
                /> */}
              <img
                src="http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg"
                alt="“一带一路”创新发展重大咨询项目启动"
                style={{ width: 400, height: 300 }}
              />
            </div>
            <span
              className="blur-hidden h5 text-primary"
              style={{ fontSize: "20px" }}
            >
              点击查看详情{">>>"}
            </span>
          </a>
        </div>
      </Row>
      {showPreview && (
        <Row className={styles.cardRow}>
          {previewCards &&
            previewCards.map((card) => (
              <MyCard
                imgSrc={card.img}
                cardTitle={card.title}
                cardFooter={card.footer}
              />
              //   <Card style={{ maxWidth: 300 }}>
              //     <CardHeader>
              //       <img src={card.img}></img>
              //     </CardHeader>
              //     <CardBody>
              //       <p className="text-primary">{card.title}</p>
              //       <p className="text-muted">{card.footer}</p>
              //     </CardBody>
              //   </Card>
            ))}
        </Row>
      )}
    </Container>
  );
};
export default NewsDisplay;
