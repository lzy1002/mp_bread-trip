import {request} from "./request.js";

export function getWaypointData(tripId, id) {
  return request({
    url: `/trips/${tripId}/waypoints/${id}`
  })
}

export function getRepliesData(tripId, id) {
  return request({
    url: `/trips/${tripId}/waypoints/${id}/replies`
  })
}
