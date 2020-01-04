// pages/waypoint/chilidrenCpts/my-replies/my-replies.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    repliesData: {
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
    goUser(event) {
      console.log(event);
      const userId = event.currentTarget.dataset.userid;
      wx.navigateTo({
        url: `/pages/user/user?userId=${userId}`
      })
    }
  }
})
