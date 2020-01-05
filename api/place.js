import {request} from "./request.js";

export function getPlaceData(type, placeId) {
  return request({
    url: `/destination/place/${type}/${placeId}`
  })
}

export function getHotData(type, placeId, start, count) {
  return request({
    url: `/destination/place/${type}/${placeId}/pois/all`,
    data: {
      start,
      count
    }
  })
}

export class PlaceHeader {
  constructor(placeData) {
    this.name = placeData.name;
    this.visited_count = placeData.visited_count;
    this.wish_to_go_count = placeData.wish_to_go_count;
    this.photo = placeData.hottest_places[0].photo;
  }
}
