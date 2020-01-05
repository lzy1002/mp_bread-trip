// pages/home/childrenCpts/my-swiper/my-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swiperData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageHeightList: [],
    maxHeight: 0,
    windowWidth: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imageLoad(event) {
      const width = event.detail.width;
      const height = event.detail.height;
      const ratio = width / height;
      const currentHeight = this.data.windowWidth / ratio;
      this.data.imageHeightList.push(currentHeight);
      if (this.data.imageHeightList.length < this.properties.swiperData.length) return;
      this.data.imageHeightList.forEach(item => {
        if (item <= this.data.maxHeight) return;
        this.setData({
          maxHeight: item
        })
      })
    },
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: (res) => {
          const rpx = 30;
          const diff = res.windowWidth / 750 * rpx;
          const windowWidth = res.windowWidth - diff * 2;
          this.setData({
            windowWidth
          })
        }
      })
    }
  }
})
