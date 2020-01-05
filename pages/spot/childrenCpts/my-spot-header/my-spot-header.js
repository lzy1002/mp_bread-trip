// pages/spot/childrenCpts/my-spot-header/my-spot-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    headerData: {
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
    userTap() {
      const userId = this.properties.headerData.id;
      wx.navigateTo({
        url: `/pages/user/user?userId=${userId}`
      })
    }
  }
})
