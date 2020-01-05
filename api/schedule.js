import {request} from "./request.js";

export function getScheduleData(tripId) {
  return request({
    url: `/trips/${tripId}/schedule`
  })
}
