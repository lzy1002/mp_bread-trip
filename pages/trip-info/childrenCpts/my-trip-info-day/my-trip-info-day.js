// pages/trip-info/childrenCpts/my-trip-info-day/my-trip-info-day.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    day: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    waypointTap(event) {
      console.log(event.currentTarget.dataset);
      const tripId = event.currentTarget.dataset.trip_id;
      const id = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/waypoint/waypoint?tripId=${tripId}&id=${id}`
      })
    }
  }
})
