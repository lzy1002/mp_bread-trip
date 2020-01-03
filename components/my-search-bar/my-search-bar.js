// components/my-search-bar/my-search-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

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
    profileTap() {
      wx.switchTab({
        url: "/pages/profile/profile"
      })
    },
    searchTap() {
      wx.navigateTo({
        url: "/pages/search/search"
      })
    }
  }
})
