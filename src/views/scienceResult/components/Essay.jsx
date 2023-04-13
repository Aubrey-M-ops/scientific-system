import React from "react";
import "./styles.scss";
import { DatePicker } from "antd";
import { Input, Table, Button } from "reactstrap";
export default function Essay() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <div className="list-top">
        <div className="head-title">
          <h4 className="node-name">科研论文</h4>
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
              <th>Name</th>
              <th>Job Position</th>
              <th className="text-center">Since</th>
              <th className="text-right">Salary</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>Andrew Mike</td>
              <td>Develop</td>
              <td className="text-center">2013</td>
              <td className="text-right">€ 99,225</td>
              <td className="text-right">
                <Button className="btn-icon" color="info" size="sm">
                  <i className="fa fa-user"></i>
                </Button>
                {` `}
                <Button className="btn-icon" color="success" size="sm">
                  <i className="fa fa-edit"></i>
                </Button>
                {` `}
                <Button className="btn-icon" color="danger" size="sm">
                  <i className="fa fa-times" />
                </Button>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>Manuel Rico</td>
              <td>Manager</td>
              <td className="text-center">2012</td>
              <td className="text-right">€ 99,201</td>
              <td className="text-right">
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
              <td className="text-right">€ 99,201</td>
              <td className="text-right">
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
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
