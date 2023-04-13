import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap";
import MyCard from "../../../../components/MyCard";
import styles from "../../styles.module.scss";

const ScientificNews = (props) => {
  const data = props.data;
  return (
    <div className="section">
      <Container style={{ width: "70%" }}>
        <div className="squares square-1" />
        <div className="squares square-2" />
        <div className={styles.sciInfo}>
          <div className={styles.leftInfo}>
            <h2>{data[0].title}</h2>
            <h4 className="description" style={{ color: "#9A9A9A" }}>
              {data[0].summary}
            </h4>
            <div className="btn-wrapper">
              {/* TODO: replace url */}
              <Button
                className="btn-round"
                color="primary"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
                rel="noopener noreferrer"
                target="_blank"
              >
                了解详情
              </Button>
              {/* TODO: replace url */}
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
                查看更多 👉
              </Button>
            </div>
          </div>
          <div className={styles.rightCards}>
            {data.slice(1, 7)?.map((card) => (
              <MyCard
                imgSrc={card.photo}
                cardTitle={card.title}
                cardFooter={`${card.author}  ${card.publishDate}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ScientificNews;
