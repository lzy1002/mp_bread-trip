import {request} from "./request.js";

export function getStoryData(id) {
  return request({
    url: "/v2/new_trip",
    data: {
      trip_id: id
    }
  })
}

export class StoryHeader {
  constructor(storyData) {
    this.cover_image_w640 = storyData.cover_image_w640;
    this.name = storyData.name;
    this.view_count = storyData.view_count;
    this.user = storyData.user;
    this.spot_count = storyData.spot_count;
    this.comments_count = storyData.comments_count;
    this.recommendations_count = storyData.recommendations_count;
  }
}
