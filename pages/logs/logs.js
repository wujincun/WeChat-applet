//logs.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady:function(){
    console.log("onReady")
  },
  onShow: function() {
    console.log("onshow");
    console.log(app.globalData.userInfo)
  },
  onHide: function() {
    console.log("onhide")
  },
  onUnload: function() {
    console.log("onunload")
  },
   onPullDownRefresh: function() {
    console.log("onPullDownRefresh")
  },
  onReachBottom: function() {
    console.log("onReachBottom")
  },
  onShareAppMessage: function () {
   console.log("onShareAppMessage")
  },
})
