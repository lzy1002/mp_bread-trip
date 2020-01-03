import {request} from "./request.js";

export function getUserData(userId) {
  return request({
    url: `/v2/users/${userId}`
  })
}
