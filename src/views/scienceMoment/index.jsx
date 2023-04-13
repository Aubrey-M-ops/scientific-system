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

const response = {
  code: 200,
  msg: "成功",
  topData: {
    data: [
      {
        nodeId: 28,
        id: 79,
        title: "丝路环境专项中期检查评审会在京召开",
        author: "中国科学院大学",
        photo:
          "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
        tag: "丝路新闻",
        url: "",
        keyword: "",
        publishDate: "",
        summary:
          "青藏高原是中低纬度面积最大的多年冻土分布区。针对高原碳库大小和格局，过去研究做了大量有益尝试，但不同研究给出的估算结果差异很大。这一方面是由于不同研究样点的代表性有限、覆盖范围不同；另一方面，多年冻土碳库的形成是在漫长历史气候变迁中发生与发展的结果，而当前碳库估算都是基于现代气候条件，未考虑古气候变迁的影响。",
      },
    ],
  },
  data: [
    {
      nodeName: "综合新闻",
      nodeId: 27,
      layout: 1,
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/27/list_1.json",
      data: {
        code: 200,
        msg: "成功",
        data: {
          nodeId: 27,
          nodeName: "综合新闻",
          list: [
            {
              nodeId: 27,
              id: 125,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 27,
              id: 121,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 27,
              id: 119,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 117,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 115,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 113,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 111,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 109,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 107,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 27,
              id: 105,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 27,
              id: 103,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 27,
              id: 101,
              title:
                "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 27,
              id: 99,
              title: "“一带一路”创新发展重大咨询项目启动",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary:
                "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
            },
            {
              nodeId: 27,
              id: 97,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 95,
              title:
                "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 93,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 91,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 27,
              id: 70,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 27,
              id: 66,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "2023-01-19",
              summary: "",
            },
            {
              nodeId: 27,
              id: 62,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
          ],
          total: 35,
          pages: 2,
          nextPage: 2,
          prePage: 0,
        },
      },
    },
    {
      nodeName: "通知公告",
      nodeId: 28,
      layout: 2,
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/28/list_1.json",
      data: {
        code: 200,
        msg: "成功",
        data: {
          nodeId: 28,
          nodeName: "通知公告",
          list: [
            {
              nodeId: 28,
              id: 79,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary:
                "青藏高原是中低纬度面积最大的多年冻土分布区。针对高原碳库大小和格局，过去研究做了大量有益尝试，但不同研究给出的估算结果差异很大。这一方面是由于不同研究样点的代表性有限、覆盖范围不同；另一方面，多年冻土碳库的形成是在漫长历史气候变迁中发生与发展的结果，而当前碳库估算都是基于现代气候条件，未考虑古气候变迁的影响。",
            },
            {
              nodeId: 28,
              id: 126,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 28,
              id: 124,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 28,
              id: 122,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 28,
              id: 120,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 118,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 116,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 114,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 112,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 110,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 108,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary:
                "题  目：山东半岛蓝色经济区海洋产业空间布局规划研究\n\n答辩人：王翠  人文地理学博士\n\n导  师:  谢正观  教授\n\n \n\n题  目：基于生态优先理念的合肥城市空间结构重构研究\n\n答辩人：龚江丽  人文地理学硕士\n\n导  师:  谢正观  教授\n\n \n\n题  目：京津冀都市圈汽车产业空间布局演化研究\n\n答辩人：黄娉婷  人文地理学硕士         \n\n导  师:  张晓平 副教授\n\n \n\n \n\n 时间：2013年5月20日  14:00——17:00\n\n地点：教学楼316教室\n\n 欢迎同学们参加！",
            },
            {
              nodeId: 28,
              id: 106,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 28,
              id: 104,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 28,
              id: 102,
              title:
                "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 28,
              id: 100,
              title: "“一带一路”创新发展重大咨询项目启动",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary:
                "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
            },
            {
              nodeId: 28,
              id: 98,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 96,
              title:
                "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 94,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 92,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 28,
              id: 90,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
          ],
          total: 39,
          pages: 2,
          nextPage: 2,
          prePage: 0,
        },
      },
    },
    {
      nodeName: "丝路动态",
      nodeId: 29,
      layout: 1,
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/29/list_1.json",
      data: {
        code: 200,
        msg: "成功",
        data: {
          nodeId: 29,
          nodeName: "丝路动态",
          list: [
            {
              nodeId: 29,
              id: 80,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 29,
              id: 76,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 29,
              id: 72,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 29,
              id: 68,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 64,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 60,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 56,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 52,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 48,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 29,
              id: 44,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 29,
              id: 40,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 29,
              id: 36,
              title:
                "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 29,
              id: 32,
              title: "“一带一路”创新发展重大咨询项目启动",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary:
                "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
            },
            {
              nodeId: 29,
              id: 28,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 24,
              title:
                "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 20,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 16,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 12,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 29,
              id: 8,
              title: "“一带一路”创新发展重大咨询项目启动",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary:
                "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
            },
            {
              nodeId: 29,
              id: 4,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
          ],
          total: 20,
          pages: 1,
          nextPage: 0,
          prePage: 0,
        },
      },
    },
    {
      nodeName: "科研进展",
      nodeId: 30,
      layout: 1,
      listJson: "http://silk-web.dms.heyfuture.com.cn/json/30/list_1.json",
      data: {
        code: 200,
        msg: "成功",
        data: {
          nodeId: 30,
          nodeName: "科研进展",
          list: [
            {
              nodeId: 30,
              id: 81,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 30,
              id: 77,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 30,
              id: 73,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 30,
              id: 69,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 65,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 61,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 57,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 53,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 49,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 30,
              id: 45,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 30,
              id: 41,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 30,
              id: 37,
              title:
                "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "",
              summary: "",
            },
            {
              nodeId: 30,
              id: 33,
              title: "“一带一路”创新发展重大咨询项目启动",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary:
                "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
            },
            {
              nodeId: 30,
              id: 29,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 25,
              title:
                "姚檀栋院士当选美国地球物理学联合会会士（2020 AGU Fellow）",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cd1a2699-3068-4815-ab61-0aeb341204df_0.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 21,
              title: "丝路环境专项中期检查评审会在京召开",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/cf115c6b-c196-4c57-82d7-436f00714439_2.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 17,
              title: "姚檀栋院士主持“环喜马拉雅”国际合作论坛的科学讨论会",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/3760b802-2115-4834-b00f-d1c8b969d769_5.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 13,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
            {
              nodeId: 30,
              id: 9,
              title: "“一带一路”创新发展重大咨询项目启动",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/427a7ff6-aa15-42e7-a802-ee08347c6d26_6.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary:
                "3月19日，中国科学院“一带一路”创新发展重大咨询项目启动会在京举办。项目牵头人、中国科学院院士、“一带一路”国际科学组织联盟（ANSO）主席白春礼出...",
            },
            {
              nodeId: 30,
              id: 5,
              title: "《第三极环境科学评估报告》全球发布",
              author: "中国科学院大学",
              photo:
                "http://silk-web.dms.heyfuture.com.cn//images/1/2023/02/07/c6b99f66-4137-4d59-b908-35d1f162382d_1.jpg",
              tag: "丝路新闻",
              url: "",
              label: "",
              publishDate: "1970-01-01",
              summary: "",
            },
          ],
          total: 20,
          pages: 1,
          nextPage: 0,
          prePage: 0,
        },
      },
    },
  ],
};

const ScienceMoment = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [data, setData] = useState([]);
  const [topData, setTopData] = useState([]);
  useEffect(() => {
    // getModule().then((response) => {
    //   const { topData, data } = response;
    //   setTopData(topData.data);
    //   setData(data);
    // });
    const { topData, data } = response;
    setTopData(topData.data);
    setData(data);
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
                .data.data.list?.map((card) => (
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
                .data.data.list.map((textItem, index) => {
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
