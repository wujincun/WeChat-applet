//index.js
//获取应用实例
var app = getApp();
var loger = require("../../utils/loger.js");
Page({
  data: {
    motto: 'Hello World!',
    userId:"123",
    userInfo: {},
    show:false,
    array:[{
      message:"hello"
    },{
      message:"world"
    },{
      message:"!"
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow:function(){
    app.globalData.userInfo = "club";
    loger.PrintLog("execute index onshow")
  },
  tapMessage:function(event){
    console.log(event)
    console.log(event.target.dataset.id)
  }
})
