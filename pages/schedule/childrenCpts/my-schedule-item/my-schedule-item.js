// pages/schedule/childrenCpts/my-schedule-item/my-shcedule-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scheduleItem: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isOpen: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    placeArrowTap() {
      this.setData({
        isOpen: !this.data.isOpen
      })
    },
    posiItemTap(event) {
      console.log(event.currentTarget.dataset);
      const scenicId = event.currentTarget.dataset.scenicid;
      wx.navigateTo({
        url: `/pages/scenic/scenic?scenicId=${scenicId}`
      })
    },
    placeTap() {
      const type = this.data.scheduleItem.place.type;
      const placeId = this.data.scheduleItem.place.id;
      wx.navigateTo({
        url: `/pages/place/place?type=${type}&placeId=${placeId}`
      })
    }
  }
})
