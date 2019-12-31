// pages/scenic/childrenCpts/my-scenic-impressions-item/my-scenic-impressions-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    impressionsItemData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hopeWidthList: [],
    windowWidth: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLoad(event) {
      const {width, height} = event.detail;
      const rpx = this.data.windowWidth / 750;
      const hopeHeight = 120 * 2 * rpx;
      const ratio = width / height;
      const hopeWidth = hopeHeight * ratio;
      const hopeWidthList = this.data.hopeWidthList;
      hopeWidthList.push(hopeWidth);
      this.setData({
        hopeWidthList
      })
    },
    impressionsItemTap() {
      const tripId = this.properties.impressionsItemData.trip.id;
      console.log(tripId);
      wx.navigateTo({
        url: `/pages/trip-info/trip-info?id=${tripId}`
      })
    }
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: (res) => {
          console.log(res);
          const windowWidth = res.windowWidth;
          this.setData({
            windowWidth
          })
        },
      })
    }
  }
})
