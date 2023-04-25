import React, { useState, useEffect } from "react";
import "./styles.scss";
import { DatePicker, Select } from "antd";
import { Input, Table, Button } from "reactstrap";
export default function Knowledge(props) {
  const [tableData, setTableData] = useState([]);
  // const tableData = useMemo(() => {}, data);
  useEffect(() => {
    const { data } = props.data;
    console.log(data, "data");
    setTableData(props.data);
  }, [props.data]);

  return (
    <div>
      <div className="list-top">
        <div className="head-title">
          <h4 className="node-name">知识产权</h4>
        </div>
        <div className="filter-wrap">
          <div className="left-filter">
            <DatePicker
              placeholder="请选择年份"
              // onChange={onChange}
              picker="year"
            />
            <Select
              placeholder="类别"
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
              <th>项目主持人</th>
              <th>主要参研人</th>
              <th className="text-left">类型</th>
              <th className="text-left">执行期</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length &&
              tableData.map((row, index) => {
                return (
                  <tr>
                    <td className="text-center">{index}</td>
                    <td
                      style={{
                        maxWidth: 400,
                        height: 40,
                        textOverflow: "ellipsis",
                      }}
                    >
                      <a href="">{row.name || "--"}</a>
                    </td>
                    <td>{row.author || "--"}</td>
                    <td>{row.people || "--"}</td>
                    <td className="text-left">{row.type || "--"}</td>
                    <td className="text-left">{`${row.executionStart || "--"}-${
                      row.executionEnd || "--"
                    }`}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
