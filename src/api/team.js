import request from "../util/request.js";
export function getModule() {
  return request({
    url: "/teamNode.html",
    method: "get",
  });
}
