import React, { useState } from "react";
import styles from "./styles.module.scss";
import {
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { useMemo } from "react";

function MyCarousel(props) {
  console.log(props.bannerData, 123);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  //图片描述
  const imgInfo = useMemo(() => {
    const data = props.bannerData.map((item) => {
      return {
        label: item.label,
        title: item.title,
      };
    });
    return data;
  }, [props.bannerData]);

  //轮播图
  const items = useMemo(() => {
    const data = props.bannerData.map((item, index) => {
      return {
        src: item.photo,
        altText: item.label,
        caption: item.label,
        key: index + 1,
      };
    });
    return data;
  }, [props.bannerData]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ height: "300px" }} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Row className={styles.imgRow}>
      <Col className={styles.imgTextCol}>
        <div className={styles.infoRow}>
          <h2 className="text-white font-weight-light">
            {imgInfo[activeIndex].label}
          </h2>
          <p className="text-white mt-4">{imgInfo[activeIndex].title}</p>
        </div>
        <Button color="warning" onClick={() => console.log("click")}>
          点击了解详情
        </Button>
      </Col>
      <Col>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Col>
    </Row>
  );
}

export default MyCarousel;
