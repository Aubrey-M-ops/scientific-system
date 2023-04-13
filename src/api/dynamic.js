import request from "../util/request.js";
export function getModule() {
  return request({
    url: "/json/dynamicNode.html",
    method: "get",
  });
}
