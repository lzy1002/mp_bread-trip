import {request} from "./request.js";

export function getScenicInfoData(scenicId) {
  return request({
    url: `/destination/place/5/${scenicId}`
  })
}

export function getImpressionsData(scenicId) {
  return request({
    url: `/place/pois/${scenicId}/impressions`
  })
}

export class ScenicHeader {
  constructor(scenicInfoData) {
    this.hottest_places = scenicInfoData.hottest_places;
    this.name = scenicInfoData.name;
    this.rating = scenicInfoData.rating;
    this.recommended_reason = scenicInfoData.recommended_reason;
    this.category = scenicInfoData.category;
  }
}

export class ScenicBasic {
  constructor(scenicInfoData) {
    this.description = scenicInfoData.description;
    this.address = scenicInfoData.address;
    this.arrival_type = scenicInfoData.arrival_type;
    this.opening_time = scenicInfoData.opening_time;
    this.tel = scenicInfoData.tel;
  }
}
