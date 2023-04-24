import request from "../util/request.js";
export function getBanner() {
  return request({
    url: "/banner.json",
    method: "get",
  });
}

export function getModule() {
  return request({
    url: "/indexNode",
    method: "get",
  });
}
