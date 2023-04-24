import request from "../util/request.js";
export function getModule() {
  return request({
    url: "/aboutNode.html",
    method: "get",
  });
}
