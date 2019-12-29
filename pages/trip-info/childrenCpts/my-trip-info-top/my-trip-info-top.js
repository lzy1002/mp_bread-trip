// pages/trip-info/childrenCpts/my-trip-info-top/my-trip-info-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    topData: {
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
    goSchedule() {
      const tripId = this.properties.topData.id;
      wx.navigateTo({
        url: `/pages/schedule/schedule?tripId=${tripId}`
      })
    }
  }
})
