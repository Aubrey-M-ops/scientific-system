import React, { useState, useEffect } from "react";
import "./styles.scss";
import { DatePicker, Select } from "antd";
import { Input, Table, Button } from "reactstrap";
export default function Data(props) {
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
          <h4 className="node-name">数据汇交</h4>
        </div>
        <div className="filter-wrap">
          <div className="left-filter">
            <DatePicker
              // onChange={onChange}
              picker="year"
              placeholder="请选择年份"
            />
            <Select
              placeholder="主题"
              style={{
                width: 320,
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
              <th>大小</th>
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
                    <td>{row.size || "--"}</td>
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
