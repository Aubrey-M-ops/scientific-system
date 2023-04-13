import request from "@/utils/request";
export function getModule() {
  return request({
    url: "/json/teamNode.html",
    method: "get",
  });
}
