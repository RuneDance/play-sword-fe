//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    disabled: true
  },
  onLoad: function(e) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        //console.log(res.windowHeight);
        that.setData({
          height: res.windowHeight - 130
        })
        //console.log(that.data.height);
      },
    })
  },
  upper: function(e) {
    this.setData({
      disabled: true
    })
  },
  lower: function(e) {
    this.setData({
      disabled: false
    })
  }
})