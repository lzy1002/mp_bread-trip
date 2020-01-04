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
      console.log(spotId);
      wx.navigateTo({
        url: `/pages/spot/spot?spotId=${spotId}`
      })
    }
  }
})
