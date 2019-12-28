import {BASEURL} from "./config.js";

export function request(option) {
  wx.showLoading({
    title: '加载ing',
    mask: true
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASEURL + option.url,
      method: option.method || "get",
      header: option.header || {},
      data: option.data || {},
      success: resolve,
      fail: reject,
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}
 