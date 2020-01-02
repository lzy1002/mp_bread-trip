// pages/place/place.js
import {getPlaceData, getHotData, PlaceHeader} from "../../api/place.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    placeId: "",
    placeData: {},
    placeHeaderData: {},
    hotData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const type = options.type;
    const placeId = options.placeId;
    this.setData({
      type,
      placeId
    });
    this.getPlaceData(type, placeId);
    this.getHotData(type, placeId, 0, 6);
  },
  getPlaceData(type, placeId) {
    getPlaceData(type, placeId).then(res => {
      console.log(res);
      const placeData = res.data;
      const placeHeaderData = new PlaceHeader(placeData);
      this.setData({
        placeData,
        placeHeaderData
      })
    })
  },
  getHotData(type, placeId, start, count) {
    getHotData(type, placeId, start, count).then(res => {
      console.log(res);
      const hotData = res.data.items;
      this.setData({
        hotData
      })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})