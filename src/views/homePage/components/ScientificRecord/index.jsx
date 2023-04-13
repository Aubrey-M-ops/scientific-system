import React from "react";
import MyCard from "../../../../components/MyCard";
import { Container, Button } from "reactstrap";
import styles from "../../styles.module.scss";

const ScientificRecord = (props) => {
  const data = props.data;
  console.log(data, 'video');
  return (
    <div className="section">
      <Container style={{ width: "70%" }}>
        <div className={styles.recordContainer}>
          {data.length ? (
            data.map((card) => {
              return (
                <MyCard
                  imgSrc={card.photo}
                  cardTitle={card.title}
                  cardFooter={`${card.author}  ${card.publishDate}`}
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
