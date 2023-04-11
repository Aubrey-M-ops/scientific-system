import React from "react";
import MyCard from "../../../../components/MyCard";
import { Container, Button } from "reactstrap";
import styles from "../../styles.module.scss";

const previewCards = new Array(8).fill({
  img: "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
  title: "《第三极环境科学评估报告》全球发布",
  footer: "2023-01-01",
});

const ScientificRecord = () => {
  return (
    <div className="section">
      <Container style={{ width: "70%" }}>
        <div className={styles.recordContainer}>
          {previewCards.length ? (
            previewCards.map((card) => {
              return (
                <MyCard
                  imgSrc={card.img}
                  cardTitle={card.title}
                  cardFooter={card.footer}
                />
              );
            })
          ) : (
            <div>没数据</div>
          )}
        </div>
      </Container>
    </div>
  );
};
export default ScientificRecord;
