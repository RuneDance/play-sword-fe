//获取应用实例
const app = getApp()
Page({
  onLoad: function (e) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        //console.log(res.windowHeight);
        that.setData({
          height: res.windowHeight-130
        })
        //console.log(that.data.height);
      },
    })
  }
})