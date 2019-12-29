import { request } from "./request.js";

export function getTripData(id) {
  return request({
    url: `/trips/${id}/waypoints`
  })
}

export class TripTop {
  constructor(tripData) {
    this.user = tripData.user,
    this.name = tripData.name,
    this.first_day = tripData.first_day,
    this.day_count = tripData.day_count,
    this.mileage = tripData.mileage,
    this.recommendations = tripData.recommendations,
    this.reward_count = tripData.reward_count,
    this.poi_infos_count = tripData.poi_infos_count,
    this.cities = tripData.cities,
    this.covered_countries = tripData.covered_countries,
    this.id = tripData.id
  }
}
