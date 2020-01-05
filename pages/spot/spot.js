// pages/spot/spot.js
import {getSpotData, SpotHeader, SpotBottom} from "../../api/spot.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    spotData: {},
    headerData: {},
    bottomData: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const spotId = options.spotId;
    this.getSpotData(spotId);
  },
  getSpotData(spotId) {
    getSpotData(spotId).then(res => {
      const spotData = res.data.data;
      const headerData = new SpotHeader(spotData);
      const bottomData = new SpotBottom(spotData);
      this.setData({
        spotData,
        headerData,
        bottomData
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