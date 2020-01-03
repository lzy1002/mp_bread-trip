// pages/place/childrenCpts/my-place-header/my-place-header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: Number,
      value: 0
    },
    iid: {
      type: String,
      value: 0
    },
    placeHeaderData: {
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
    placeHeaderTap() {
      const type = this.properties.type;
      const iid = this.properties.iid;
      wx.navigateTo({
        url: `/pages/photos/photos?type=${type}&iid=${iid}`
      })
    }
  }
})
