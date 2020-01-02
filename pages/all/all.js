// pages/all/all.js
import {getAllData} from "../../api/all.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: "all",
    type: 0,
    placeId: 0,
    titleList: [
      {title: "全部", category: "all"},
      {title: "景点", category: "sights"},
      {title: "住宿", category: "hotel"},
      {title: "餐厅", category: "restaurant"},
      {title: "休闲娱乐", category: "experience"},
      {title: "购物", category: "mall"}
    ],
    dataObj: {
      all: {start: 0, list: []},
      sights: {start: 0, list: []},
      hotel: {start: 0, list: []},
      restaurant: {start: 0, list: []},
      experience: {start: 0, list: []},
      mall: {start: 0, list: []}
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const {type, placeId} = options;
    this.setData({
      type,
      placeId
    })
    this.getAllData(type, placeId, "all");
    this.getAllData(type, placeId, "sights");
    this.getAllData(type, placeId, "hotel");
    this.getAllData(type, placeId, "restaurant");
    this.getAllData(type, placeId, "experience");
    this.getAllData(type, placeId, "mall");
  },
  getAllData(type, placeId, category) {
    let start = this.data.dataObj[category].start;

    getAllData(type, placeId, category, start).then(res => {
      console.log(res);
      const resList = res.data.items;
      let list = this.data.dataObj[category].list;
      list.push(...resList);
      start += 20;
      const startKey = `dataObj.${category}.start`;
      const listKey = `dataObj.${category}.list`;
      this.setData({
        [listKey]: list,
        [startKey]: start
      })
    })
  },
  tabItemTap(event) {
    const category = event.detail.category;
    console.log(category);
    this.setData({
      category
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const type = this.data.type;
    const placeId = this.data.placeId;
    const category = this.data.category;
    this.getAllData(type, placeId, category);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})