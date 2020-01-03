// pages/photos/childrenCpts/my-photos-item/my-photos-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    photoItemData: {
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
    photosItemTap() {
      const id = this.properties.photoItemData.trip_id;
      wx.navigateTo({
        url: `/pages/trip-info/trip-info?id=${id}`
      })
    }
  }
})
