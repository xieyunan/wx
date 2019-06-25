// pages/00index_xiangqing/index_xiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:1,
    xiangqing: { 
      name: "黑木耳莴笋炒肉",
      yueshou: "35", 
      haoping: "100%", 
      money: 16, 
      yuanjia: "￥18", 
      miaoshu:"描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容 描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容。"
    },
  },
  // 美食预约按钮
  yuyue:function(e){
    wx.navigateTo({
      url: '../00index_yudingfood/index_yudingfood',
    })
  },
  // 外卖按钮
  waimai: function (e) {
    wx.navigateTo({
      url: '../00index_waimai/index_waimai',
    })
  },
  // 点击选好了按钮
  // maidan:function(){
  //   wx.navigateTo({
  //     url: '../00index_xiadan/index_xiadan',
  //   })
  // },
  // 加入购物车
  // jiaru:function(){
  //   wx.navigateTo({
  //     url: '../02index_mydingdan/index_mydingdan',
  //   })
  // },
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