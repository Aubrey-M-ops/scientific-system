import request from "../util/request.js";
export function getModule() {
  return request({
    url: "/json/achievementsNode.html",
    method: "get",
  });
}