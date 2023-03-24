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

const items = [
  {
    src: "https://picsum.photos/id/123/1200/400",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/456/1200/400",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/678/1200/400",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

const imgInfo = [
  {
    title: "置顶新闻1",
    info: "报告：我国城市建筑碳排放呈现自北向南、自东向西递减分布状态",
  },
  {
    title: "置顶新闻2",
    info: "报告：我国城市建筑碳排放呈现自北向南、自东向西递减分布状态,报告：我国城市建筑碳排放呈现自北向南、自东向西递减分布状态",
  },
  {
    title: "置顶新闻3",
    info: "报告：我国城市建筑碳排放呈现自北向南、自东向西递减分布状态,报告：我国城市建筑碳排放呈现自北向南、自东向西递减分布状态,报告：我国城市建筑碳排放呈现自北向南、自东向西递减分布状态",
  },
];

function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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
            {imgInfo[activeIndex].title}
          </h2>
          <p className="text-white mt-4">{imgInfo[activeIndex].info}</p>
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
