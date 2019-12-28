import {request} from "./request.js";

export function getIndexData() {
  return request({
    url: "/v2/index"
  })
}
