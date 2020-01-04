// pages/user/childrenCpts/my-user-trip-item/my-user-trip-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tripItemData: {
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
    userTripItemTap() {
      const id = this.properties.tripItemData.id;
      const def = this.properties.tripItemData.default;
      if(def) {
        wx.navigateTo({
          url: `/pages/story/story?id=${id}`
        })
      }else {
        wx.navigateTo({
          url: `/pages/trip-info/trip-info?id=${id}`
        })
      }

    }
  }
})
