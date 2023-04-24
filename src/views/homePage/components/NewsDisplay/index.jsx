import React from "react";
import { useState } from "react";
import { Container, Row, Button } from "reactstrap";
import MyCard from "../../../../components/MyCard";

import styles from "../../styles.module.scss";

const NewsDisplay = (props) => {
  const data = props.data;
  const [showPreview, setShowPreview] = useState(true);
  return (
    <Container style={{ width: "70%" }}>
      <Row className={styles.newsRow}>
        <div className={styles.infoPart}>
          <h2 className="title">{data[0]?.title}</h2>
          <h4 className="description" style={{ marginBottom: "50px" }}>
            {data[0]?.summary}
          </h4>
          <div className="btn-wrapper">
            <Button
              className="btn-round"
              color="primary"
              //TODO: replace url
              href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons"
              rel="noopener noreferrer"
              target="_blank"
            >
              了解详情
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
              {/* {showPreview ? "收回👆" : "预览更多👇"} */}
              查看更多👉
            </Button>
          </div>
        </div>

        <div className="blur-hover">
          {/* TODO: replace url */}
          <a href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/icons">
            <div className="icons-container blur-item on-screen mt-5">
              <img src={data?.[0]?.photo} style={{ width: 400, height: 300 }} />
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
          {data &&
            data
              .slice(1, 4)
              .map((card) => (
                <MyCard
                  imgSrc={card.photo}
                  cardTitle={card.title}
                  cardFooter={`${card.author}  ${card.publishDate}`}
                />
              ))}
        </Row>
      )}
    </Container>
  );
};
export default NewsDisplay;
