import {request} from "./request.js";
// http://m.breadtrip.com/api/destination/place/3/11199/pois/all/?sort=default&start=0
export function getAllData(type, placeId, category, start) {
  return request({
    url: `/destination/place/${type}/${placeId}/pois/${category}`,
    data: {
      start
    }
  })
}
