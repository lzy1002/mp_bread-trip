// pages/spot/childrenCpts/my-spot-bottom/my-spot-bottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bottomData: {
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
    goStory() {
      const id = this.properties.bottomData.id;
      wx.navigateTo({
        url: `/pages/story/story?id=${id}`
      })
    },
    likeUserTap(event) {
      const userId = event.currentTarget.dataset.userid;
      wx.navigateTo({
        url: `/pages/user/user?userId=${userId}`
      })
    },
    commentUserTap(event) {
      const userId = event.currentTarget.dataset.userid;
      wx.navigateTo({
        url: `/pages/user/user?userId=${userId}`
      })
    }
  }
})
