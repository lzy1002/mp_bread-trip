import {BASEURL} from "./config.js";

export function request(option) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASEURL + option.url,
      method: option.method || "get",
      header: option.header || {},
      data: option.data || {},
      success: resolve,
      fail: reject
    })
  })
}
 