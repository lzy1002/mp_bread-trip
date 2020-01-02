// pages/place/childrenCpts/my-place-hot/my-place-hot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: Number,
      value: 1
    },
    placeId: {
      type: Number,
      value: 0
    },
    hotData: {
      type: Array,
      value: []
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
    moreHotTap() {
      const type = this.properties.type;
      const placeId = this.properties.placeId;
      wx.navigateTo({
        url: `/pages/all/all?type=${type}&placeId=${placeId}`
      })
    }
  }
})
