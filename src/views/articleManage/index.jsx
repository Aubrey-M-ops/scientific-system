import React from "react"

import {
    Table,
    Button,
    Container,
    Input
} from "reactstrap"

import { DatePicker, Select } from "antd";
import './styles.scss'

export default function ArticleManage() {
    return (
        <>
            <div className="wrapper">
                <div className="page-header">
                    <div className="page-header-image" />
                    <div className="content" style={{ margin: '8%' }}>
                        <Container>
                            <div className="outer-filter">
                                <div className="filter-wrap">
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmai1l"
                                        placeholder="类别"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmai1l"
                                        placeholder="作者"
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        id="exampleEmai1l"
                                        placeholder="文章名称"
                                    />
                                </div>
                                <Button color="primary">
                                    搜索
                                </Button>
                                <Button color="primary">
                                    <strong>+</strong>上传文章
                                </Button>
                            </div>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>文章名称</th>
                                        <th>作者</th>
                                        <th className="text-center">发表时间</th>
                                        <th className="text-center">文章种类</th>
                                        <th className="text-center">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 10 }).map((item, index) => {
                                        return (
                                            <tr>
                                                <td className="text-center">{index + 1}</td>
                                                <td style={{ width: '500px' }}>Plant organic N uptake maintains species dominance under long-term warming. PLANT AND SOIL, 2018, 通讯作者.</td>
                                                <td>中国知网CNKI</td>
                                                <td className="text-center">2023</td>
                                                <td className="text-center">{index % 2 ? '科研论文' : '知识产权'}</td>
                                                <td className="text-center">
                                                    <Button className="btn-icon" color="info" size="sm">
                                                        <i className="fa fa-user"></i>
                                                    </Button>{` `}
                                                    <Button className="btn-icon" color="success" size="sm">
                                                        <i className="fa fa-edit"></i>
                                                    </Button>{` `}
                                                    <Button className="btn-icon" color="danger" size="sm">
                                                        <i className="fa fa-times" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Container>
                    </div>
                </div>
            </div>
        </>)
}