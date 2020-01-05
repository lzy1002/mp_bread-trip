// components/my-waypoint/my-waypoint.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    waypointData: {
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
    goScenic(event) {
      const {type, scenicid} = event.currentTarget.dataset;
      if(type !== 5) return;
      wx.navigateTo({
        url: `/pages/scenic/scenic?type=${type}&scenicId=${scenicid}`
      })
    }
  }
})
