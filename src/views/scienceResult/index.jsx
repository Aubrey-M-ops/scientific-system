import React, { useState } from "react";
import "./styles.scss";
import RESULT_PART from "../../constant/result";
import { useEffect } from "react";
import Award from "./components/Award";
import Essay from "./components/Essay";
import Data from "./components/Data";
import Knowledge from "./components/Knowledge";
import Project from "./components/Project";

export default function ScienceResult() {
  const [currentPart, setCurrentPart] = useState(RESULT_PART.ESSAY);
  const [currentPanel, setCurrentPanel] = useState(<Essay />);
  useEffect(() => {
    switch (currentPart) {
      case RESULT_PART.ESSAY:
        setCurrentPanel(<Essay />);
        break;
      case RESULT_PART.KNOWLEDGE:
        setCurrentPanel(<Knowledge />);
        break;
      case RESULT_PART.PROJECT:
        setCurrentPanel(<Project />);
        break;
      case RESULT_PART.DATA:
        setCurrentPanel(<Data />);
        break;
      case RESULT_PART.AWARD:
        setCurrentPanel(<Award />);
        break;
      default:
        break;
    }
  }, [currentPart]);

  return (
    <div className="achievements-page">
      <div className="image-bg">
        <img
          src={require("../../assets/img/kycg_banner.jpeg")}
          alt="科研成果"
        />
      </div>
      <div className="tabs-page">
        <div className="container">
          <div className="left-tab">
            <div>
              <div className="tabs-nav-list">
                <div className="tab-item">
                  <a
                    aria-current="page"
                    className="tab-link font-18 active"
                    // href="/achievements/17"
                    onClick={() => {
                      setCurrentPart(RESULT_PART.ESSAY);
                    }}
                  >
                    <span className="tab-name">科研论文</span>
                    <span className="iconfont icon-xiala"></span>
                  </a>
                </div>
                <div className="tab-item">
                  <a
                    className="tab-link font-18"
                    // href="/achievements/18"
                    onClick={() => {
                      setCurrentPart(RESULT_PART.KNOWLEDGE);
                    }}
                  >
                    <span className="tab-name">知识产权</span>
                    <span className="iconfont icon-xiala"></span>
                  </a>
                </div>
                <div className="tab-item">
                  <a
                    className="tab-link font-18"
                    // href="/achievements/16"
                    onClick={() => {
                      setCurrentPart(RESULT_PART.PROJECT);
                    }}
                  >
                    <span className="tab-name">科研项目</span>
                    <span className="iconfont icon-xiala"></span>
                  </a>
                </div>
                <div className="tab-item">
                  <a
                    className="tab-link font-18"
                    // href="/achievements/22"
                    onClick={() => {
                      setCurrentPart(RESULT_PART.DATA);
                    }}
                  >
                    <span className="tab-name">数据汇交</span>
                    <span className="iconfont icon-xiala"></span>
                  </a>
                </div>
                <div className="tab-item">
                  <a
                    className="tab-link font-18"
                    // href="/achievements/39"
                    onClick={() => {
                      setCurrentPart(RESULT_PART.AWARD);
                    }}
                  >
                    <span className="tab-name">获奖与评价</span>
                    <span className="iconfont icon-xiala"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right-list">{currentPanel}</div>
        </div>
      </div>
    </div>
  );
}
