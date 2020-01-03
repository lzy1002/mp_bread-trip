// pages/all/childrenCpts/my-all-category-item/my-all-category-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categoryItemData: {
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
    categoryItemTap() {
      const scenicId = this.properties.categoryItemData.id;
      const type = this.properties.categoryItemData.type;
      wx.navigateTo({
        url: `/pages/scenic/scenic?scenicId=${scenicId}&type=${type}`
      })
    }
  }
})
