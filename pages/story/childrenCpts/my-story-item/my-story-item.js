// pages/story/childrenCpts/my-story-item/my-story-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    storyItemData: {
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
    storyItemTap() {
      const spotId = this.properties.storyItemData.spot_id;
      if (getCurrentPages().length > 9) {  // 当进入当前页面时有可能在小程序的页面栈中的页面已经等于10 那么再使用navigateTo进行跳转会失败 所以这里判断当前页面栈中的页面是否大于9 如果大于9那么改为使用redirectTo跳转
        wx.redirectTo({
          url: `/pages/spot/spot?spotId=${spotId}`
        })
      }else {
        wx.navigateTo({
          url: `/pages/spot/spot?spotId=${spotId}`
        })
      }
    }
  }
})
