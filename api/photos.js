import {request} from "./request.js";

export function getPhotosData(type, iid) {
  return request({
    url: `/destination/place/${type}/${iid}/photos`
  })
}
