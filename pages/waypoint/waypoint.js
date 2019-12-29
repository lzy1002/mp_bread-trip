// pages/waypoint/waypoint.js
import {getWaypointData, getRepliesData} from "../../api/waypoint.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    waypointData: {},
    repliesData: {}
  },

  getWaypointData(tripId, id) {
    getWaypointData(tripId, id).then(res => {
      console.log(res);
      const waypointData = res.data;
      this.setData({
        waypointData
      })
    })
  },
  getRepliesData(tripId, id) {
    getRepliesData(tripId, id).then(res => {
      const repliesData = res.data;
      console.log(res);
      this.setData({
        repliesData
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {tripId, id} = options;
    console.log(tripId, id);
    this.getWaypointData(tripId, id);
    this.getRepliesData(tripId, id);
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