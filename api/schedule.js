import {request} from "./request.js";
// http://m.breadtrip.com/api/trips/2387365028/schedule/
export function getScheduleData(tripId) {
  return request({
    url: `/trips/${tripId}/schedule`
  })
}
