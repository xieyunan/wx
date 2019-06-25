// pages/02index_maidan/index_maidan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total:0,
    youhuiquan: [],
    indexs:0,//0是消费总金额   1是不参与优惠金额
  },
  //点击消费总金额
  total:function(){
    this.setData({
      indexs:0
    })
  },
  //店家不参与优惠金额
  totalno: function () {
    this.setData({
      indexs: 1
    })
  },
  //点击优惠券
  youHui: function (e) {
    wx.navigateTo({
      url: '../02index_myyouhui/index_myyouhui',
    })
  },
  //获取总价
  moneyValue:function(e){
    this.setData({
      total: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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