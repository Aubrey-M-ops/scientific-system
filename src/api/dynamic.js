import request from "../util/request.js";
export function getModule() {
  return request({
    url: "/dynamicNode.html",
    method: "get",
  });
}
