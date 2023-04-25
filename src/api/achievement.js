import request from "../util/request.js";
export function getModule() {
  return request({
    url: "/achievementsNode",
    method: "get",
  });
}

export function getSelectList(nodeId, fieldName) {
  /* 获取文本类型的字段的下拉列表
  fieldName参数值与后台组件名相同 */
  return request({
    url: "/search",
    params: {
      nodeId,
      fieldName,
    },
    method: "get",
  });
}
