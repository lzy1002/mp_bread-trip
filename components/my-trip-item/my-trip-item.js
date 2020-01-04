// components/my-tirp-item/my-tirp-item.js
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
    tripItemTap(event) {
      console.log(event.currentTarget.dataset.id);
      const id = event.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/trip-info/trip-info?id=${id}`
      })
    },
    userTap() {
      const userId = this.properties.tripItemData.data[0].user.id;
      console.log(userId);
      wx.navigateTo({
        url: `/pages/user/user?userId=${userId}`
      })
    }
  }
})
