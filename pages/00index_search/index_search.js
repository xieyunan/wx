// pages/00index_search/index_search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: "",
    historyArr:[
      []
    ]
  },
  //搜索按钮
  inputBtn: function (e) {
    this.setData({
     
    });
  },
  //清空输入框
  clearInput: function (e) {
    this.setData({
      inputVal: ""
    });
  },
  //获取输入框的值
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value

    });
  },
  //点击清除历史记录
  clearHistory:function(e){
    
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