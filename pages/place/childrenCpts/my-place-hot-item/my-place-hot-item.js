// pages/place/childrenCpts/my-place-hot-item/my-place-hot-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hotItemData: {
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
    hotItemTap() {
      const id = this.properties.hotItemData.id;
      wx.navigateTo({
        url: `/pages/scenic/scenic?scenicId=${id}`
      })
    }
  }
})
