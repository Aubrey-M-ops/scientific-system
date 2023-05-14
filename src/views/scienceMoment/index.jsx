import React, { useState, useEffect } from "react";
import "./styles.scss";
import { getModule } from "../../api/dynamic";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import MyCard from "../../components/MyCard";

const ScienceMoment = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState([]);
  const [topData, setTopData] = useState([]);
  useEffect(() => {
    getModule().then((response) => {
      const { topData, data } = response;
      setTopData(topData.data);
      setData(data);
    });
  }, []);
  return (
    data.length &&
    topData.length && (
      <div className="dynamic-container">
        <div className="top-news">
          <div className="container-wrap">
            <div className="left">
              {/* FIXME: replace url */}
              <a className="img-wrap" href="/dynamic/content/28/79" target="">
                <img
                  className="img"
                  src={topData[0].photo}
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
                  {/* FIXME: replace url */}
                  <a
                    className="title-content"
                    href="/dynamic/content/28/79"
                    target=""
                  >
                    {topData[0].title}
                  </a>
                </div>

                <div className="news-summary">{topData[0].summary}</div>
                <div className="news-bottom">
                  <span className="author">{topData[0].author}</span>
                  <span className="date">{topData[0].publishDate}</span>
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
                {data.map((item, index) => {
                  return (
                    <NavItem
                      className={currentTab === index ? "tab-active" : ""}
                      onClick={() => {
                        setCurrentTab(index);
                      }}
                    >
                      <NavLink href={"#" + item.url}>
                        <p className={currentTab === index ? "tab-name" : ""}>
                          {item.nodeName}
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
              {data
                .find((item, index) => index === currentTab)
                .data?.map((card) => (
                  <MyCard
                    imgSrc={card.photo}
                    cardTitle={card.title}
                    cardFooter={card.author}
                  />
                ))}
            </div>
          ) : (
            <div className="text-list">
              {data
                .find((item, index) => index === currentTab)
                .data?.map((textItem, index) => {
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
    )
  );
};

export default ScienceMoment;
