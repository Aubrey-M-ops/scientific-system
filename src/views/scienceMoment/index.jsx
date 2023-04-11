import React, { useState } from "react";
import "./styles.scss";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import DYNAMIC_MENU from "../../constant/dynamic";
import MyCard from "../../components/MyCard";

const previewCards = new Array(16).fill({
  img: "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
  title: "《第三极环境科学评估报告》全球发布",
  footer: "2023-01-01",
});
const textList = new Array(16).fill({
  url: "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
  title: "1、《第三极环境科学评估报告》全球发布",
});

const ScienceMoment = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <div className="dynamic-container">
      <div className="top-news">
        <div className="container-wrap">
          <div className="left">
            <a className="img-wrap" href="/dynamic/content/28/79" target="">
              <img
                className="img"
                src="http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg"
                alt="丝路环境专项中期检查评审会在京召开"
              />
            </a>
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
            </div>
          </div>
          <div className="right">
            <div className="right-wrap">
              <div className="news-title">
                <div className="tag">置顶</div>
                <a
                  className="title-content"
                  href="/dynamic/content/28/79"
                  target=""
                >
                  丝路环境专项中期检查评审会在京召开
                </a>
              </div>

              <div className="news-summary">
                青藏高原是中低纬度面积最大的多年冻土分布区。针对高原碳库大小和格局，过去研究做了大量有益尝试，但不同研究给出的估算结果差异很大。这一方面是由于不同研究样点的代表性有限、覆盖范围不同；另一方面，多年冻土碳库的形成是在漫长历史气候变迁中发生与发展的结果，而当前碳库估算都是基于现代气候条件，未考虑古气候变迁的影响。
              </div>
              <div className="news-bottom">
                <span className="author">中国科学院大学</span>
                <span className="date"></span>
              </div>
            </div>
          </div>
        </div>
        {/* tab行 */}
        <Navbar
          className="bg-primary"
          expand="lg"
          style={{ margin: "40px 0", borderRadius: "3px", zIndex: 1 }}
        >
          <Container>
            <Nav navbar>
              {DYNAMIC_MENU.map((item) => {
                return (
                  <NavItem
                    className={currentTab === item.id && "tab-active"}
                    key={item.id}
                    onClick={() => {
                      setCurrentTab(item.id);
                    }}
                  >
                    <NavLink href={"#" + item.url}>
                      <p className={currentTab === item.id && "tab-name"}>
                        {item.name}
                      </p>
                    </NavLink>
                  </NavItem>
                );
              })}
            </Nav>
          </Container>
        </Navbar>

        {currentTab !== 2 ? (
          <div className="cards-display">
            {previewCards?.map((card) => (
              <MyCard
                imgSrc={card.img}
                cardTitle={card.title}
                cardFooter={card.footer}
              />
            ))}
          </div>
        ) : (
          <div className="text-list">
            {textList.map((textItem, index) => {
              return (
                <div
                  className="text-item wow fadeInLeft"
                  data-wow-delay={`${0 + 100 * index}ms`}
                  style={{
                    visibility: "visible",
                    animationDelay: `${0 + 100 * index}ms`,
                  }}
                >
                  <div className="item-wrap">
                    <a
                      className="item-info"
                      href="/dynamic/content/27/125"
                      target=""
                    >
                      <div className="item-title">{textItem.title}</div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScienceMoment;
