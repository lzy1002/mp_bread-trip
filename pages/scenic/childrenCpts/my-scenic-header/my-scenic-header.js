// pages/scenic/childrenCpts/my-scenic-header/my-scenic-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scenicId: {
      type: Number,
      value: 0
    },
    type: {
      type: Number,
      value: 0
    },
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
    scenicHeaderTap() {
      const scenicId = this.properties.scenicId;
      const type = this.properties.type;
      wx.navigateTo({
        url: `/pages/photos/photos?type=${type}&iid=${scenicId}`
      })
    }
  }
})
