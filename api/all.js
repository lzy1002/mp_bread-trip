import {request} from "./request.js";

export function getAllData(type, placeId, category, start) {
  return request({
    url: `/destination/place/${type}/${placeId}/pois/${category}`,
    data: {
      start
    }
  })
}
