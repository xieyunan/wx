// pages/02index_my/index_my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"西西",
    headerbgSrc: "#fff",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 外卖订单
  waimaiDD:function(){
    wx.navigateTo({
      url: '../02index_mydingdan/index_mydingdan',
    })
  },
  // 店内订单
  dianneiDD:function(){
    wx.navigateTo({
      url: '../02index_dianneiDD/index_dianneiDD',
    })
  },

  onLoad: function (options) {
  
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