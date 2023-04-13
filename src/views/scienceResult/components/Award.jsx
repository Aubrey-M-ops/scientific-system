import React, { useState, useEffect } from "react";
import "./styles.scss";
import { DatePicker } from "antd";
import { Input, Table, Button } from "reactstrap";

export default function Award(props) {
  const { data } = props.data;
  const [year, setYear] = useState();
  const [type, setType] = useState();
  const [level, setLevel] = useState();
  const [award, setAward] = useState();
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
          <h4 className="node-name">获奖与评价</h4>
        </div>
        <div className="filter-wrap">
          <div className="left-filter">
            <DatePicker
              // onChange={onChange}
              picker="year"
            />
            <Input
              type="select"
              name="select"
              id="exampleSelect1"
              style={{ width: 120 }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <Input
              type="select"
              name="select"
              id="exampleSelect2"
              style={{ width: 120 }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
            <Input
              type="select"
              name="select"
              id="exampleSelect3"
              style={{ width: 120 }}
              placeholder="获奖"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
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
              <th>奖项</th>
              <th className="text-center">等级</th>
              <th className="text-left">类别</th>
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
                    <td>
                      <a href="">{row.name || "--"}</a>
                    </td>
                    <td>{row.award}</td>
                    <td className="text-center">{row.level || "--"}</td>
                    <td className="text-left">{row.type || "--"}</td>
                    <td className="text-left">{row.year || "--"}</td>
                  </tr>
                );
              })}
            {/* 
            <tr>
              <td className="text-center">2</td>
              <td>Manuel Rico</td>
              <td>Manager</td>
              <td className="text-center">2012</td>
              <td className="text-left">€ 99,201</td>
              <td className="text-left">
                <Button className="btn-icon btn-round" color="info" size="sm">
                  <i className="fa fa-user"></i>
                </Button>
                {` `}
                <Button
                  className="btn-icon btn-round"
                  color="success"
                  size="sm"
                >
                  <i className="fa fa-edit"></i>
                </Button>
                <Button className="btn-icon btn-round" color="danger" size="sm">
                  <i className="fa fa-times" />
                </Button>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td>Alex Mike</td>
              <td>Designer</td>
              <td className="text-center">2012</td>
              <td className="text-left">€ 99,201</td>
              <td className="text-left">
                <Button className="btn-icon btn-simple" color="info" size="sm">
                  <i className="fa fa-user"></i>
                </Button>
                {` `}
                <Button
                  className="btn-icon btn-simple"
                  color="success"
                  size="sm"
                >
                  <i className="fa fa-edit"></i>
                </Button>
                {` `}
                <Button
                  className="btn-icon btn-simple"
                  color="danger"
                  size="sm"
                >
                  <i className="fa fa-times" />
                </Button>
                {` `}
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
