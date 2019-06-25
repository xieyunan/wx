// pages/02index_myxinxi/index_myxinxi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: "江西省南昌市高新技术产业开发区紫阳大道2999号",
    sex:1,  //性别
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // 选择男
  sexman:function(e){
    console.log(e.currentTarget.id)
    this.setData({

      sex: e.currentTarget.id
    });
  },
  // 选择女
  sexwoman: function (e) {
    console.log(e.currentTarget.id)
    this.setData({

      sex: e.currentTarget.id
    });
  },
  // 提交保存
  tjbaocun:function(e){
    console.log(1)
    wx.navigateBack({  
      delta: 1
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