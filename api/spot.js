import {request} from "./request.js";

export function getSpotData(spotId) {
  return request({
    url: `/v2/new_trip/spot`,
    data: {
      spot_id: spotId
    }
  })
}

export class SpotHeader {
  constructor(spotData) {
    this.name = spotData.trip.user.name;
    this.avatar_m = spotData.trip.user.avatar_m;
    this.view_count = spotData.spot.view_count;
    this.id = spotData.trip.user.id;
  }
}

export class SpotBottom {
  constructor(spotData) {
    this.id = spotData.trip.id;
    this.name = spotData.trip.name;
    this.date_added = spotData.trip.date_added;
    this.recommendations_count = spotData.spot.recommendations_count;
    this.comments_count = spotData.spot.comments_count;
    this.recommendations = spotData.spot.recommendations;
    this.comments = spotData.spot.comments;
  }
}
