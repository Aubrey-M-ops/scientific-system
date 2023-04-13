import request from "../util/request.js";
export function getBanner() {
  return request({
    url: "/json/banner.json",
    method: "get",
  });
}

export function getModule() {
  return request({
    url: "/json/indexNode.html",
    method: "get",
  });
}
