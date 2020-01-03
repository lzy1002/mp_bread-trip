// pages/photos/photos.js
import {getPhotosData} from "../../api/photos.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    photosData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const type = options.type;
    const iid = options.iid;
    this.getPhotosData(type, iid);

  },
  getPhotosData(type, iid) {
    getPhotosData(type, iid).then(res => {
      console.log(res);
      const photosData = res.data.items;
      this.setData({
        photosData
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