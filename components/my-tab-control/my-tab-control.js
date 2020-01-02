// components/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabItemTap(event) {
      const activeIndex = event.currentTarget.dataset.index;
      this.setData({
        activeIndex
      })
      const category = this.properties.titleList[activeIndex].category;
      this.triggerEvent("tabItemTap", {category: category});
    }
  }
})
