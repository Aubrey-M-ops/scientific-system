import request from "../util/request.js";
export function getWorldGeo() {
  return request({
    url: "/world",
    method: "get",
  });
}
export function getChinaGeo() {
  return request({
    url: "/china",
    method: "get",
  });
}

export function getSilkRoad() {
  return request({
    url: "/silkRoad",
    method: "get",
  });
}
