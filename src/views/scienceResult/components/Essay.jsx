import React, { useState, useEffect } from "react";
import "./styles.scss";
import { DatePicker, Select } from "antd";
import { Input, Table, Button } from "reactstrap";
import { getSelectList } from "../../../api/achievement";

export default function Essay(props) {
  const nodeId = props.nodeId;

  const [year, setYear] = useState("");
  const [author, setAuthor] = useState(undefined);
  const [topic, setTopic] = useState(undefined);

  const [mag, setMag] = useState(undefined);
  const [keywords, setKeywords] = useState(undefined);

  const [authorOptions, setAuthorOptions] = useState([]);
  const [topicOptions, setTopicOptions] = useState([]);
  const [magOptions, setMagOptions] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const { data } = props.data;
    console.log(data, "data");
    setTableData(props.data);
    getOptions();
  }, [props.data]);

  const getAuthorOptions = () => {
    getSelectList(nodeId, "author").then((response) => {
      // 获取作者下拉列表
      let options = [];
      const { code, data } = response;
      if (code === 200) {
        data.map((item) => {
          let authorArr = [];
          if (item.indexOf(" ") > -1) {
            authorArr = item.split(" ");
          } else if (item.indexOf("；") > -1) {
            authorArr = item.split("；");
          }
          authorArr.map((author) => {
            if (options.indexOf(author) === -1 && author) {
              options.push(author);
            }
            return author;
          });
          return item;
        });
      }
      authorOptions = options.map((item) => {
        return { label: item, value: item };
      });
      setAuthorOptions(authorOptions);
    });
  };
  const getTopicOptions = () => {
    getSelectList(nodeId, "name").then((response) => {
      // 获取主题下拉列表
      let options = [];
      const { code, data } = response;
      if (code === 200) {
        data.map((item) => {
          if (options.indexOf(item) === -1) {
            options.push(item);
          }
          return item;
        });
      }
      topicOptions = options.map((item) => {
        return { label: item, value: item };
      });
      setTopicOptions(topicOptions);
    });
  };
  const getMagOptions = () => {
    getSelectList(nodeId, "mag").then((response) => {
      // 获取期刊下拉列表
      let options = [];
      const { code, data } = response;
      if (code === 200) {
        data.map((item) => {
          if (options.indexOf(item) === -1) {
            options.push(item);
          }
          return item;
        });
      }
      magOptions = options.map((item) => {
        return { label: item, value: item };
      });
      setMagOptions(magOptions);
    });
  };
  const getOptions = () => {
    getAuthorOptions(); // 获取作者下拉列表
    getTopicOptions(); // 获取主题下拉列表
    getMagOptions(); // 获取期刊下拉列表
  };
  return (
    <div>
      <div className="list-top">
        <div className="head-title">
          <h4 className="node-name">科研论文</h4>
        </div>
        <div className="filter-wrap">
          <div className="left-filter">
            <DatePicker
              placeholder="请选择年份"
              // onChange={onChange}
              picker="year"
            />
            <Select
              placeholder="作者"
              style={{
                width: 120,
              }}
              // onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
            <Select
              placeholder="主题"
              style={{
                width: 240,
              }}
              // onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
            <Select
              placeholder="期刊"
              style={{
                width: 120,
              }}
              // onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </div>
          {/* 关键词搜索 */}
          <div></div>
        </div>
      </div>
      <div className="list-display">
        <Table responsive>
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th>主题</th>
              <th>作者</th>
              <th className="text-center">期刊</th>
              <th className="text-left">年份</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length &&
              tableData.map((row, index) => {
                console.log(row, "rr");
                return (
                  <tr>
                    <td className="text-center">{index}</td>
                    <td
                      style={{
                        maxWidth: 460,
                        height: 40,
                        textOverflow: "ellipsis",
                      }}
                    >
                      <a href="">{row.name || "--"}</a>
                    </td>
                    <td>{row.author}</td>
                    <td className="text-center">{row.mag || "--"}</td>
                    <td className="text-left">{row.year || "--"}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
