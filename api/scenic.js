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
