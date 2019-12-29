import {request} from "./request.js";

export function getWaypointData(tripId, id) {
  return request({
    url: `/trips/${tripId}/waypoints/${id}`
  })
}
// http://m.breadtrip.com/api/trips/2387365028/waypoints/2370439583/replies/
export function getRepliesData(tripId, id) {
  return request({
    url: `/trips/${tripId}/waypoints/${id}/replies`
  })
}
