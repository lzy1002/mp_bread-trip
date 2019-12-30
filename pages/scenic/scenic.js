// pages/scenic/scenic.js
import {getScenicInfoData, getImpressionsData, ScenicHeader} from "../../api/scenic.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scenicInfoData: {},
    headerData: {},
    impressionsData: {}
  },
  getScenicInfoData(scenicId) {
    getScenicInfoData(scenicId).then(res => {
      console.log(res);
      const scenicInfoData = res.data;
      const headerData = new ScenicHeader(scenicInfoData);
      console.log(headerData);
      this.setData({
        scenicInfoData,
        headerData
      })
    })
  },
  getImpressionsData(scenicId) {
    getImpressionsData(scenicId).then(res => {
      console.log(res);
      const impressionsData = res.data;
      this.setData({
        impressionsData
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const scenicId = options.scenicId;
    this.getScenicInfoData(scenicId);
    this.getImpressionsData(scenicId);
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