// pages/02index_myyouhui/index_myyouhui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yiyongImg: "background-image:url('data:image/png;base64,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')",
    weiyongImg: "background-image:url('data:image/png;base64,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')",
    guoqi: "已过期",
    shiyong: "未使用",
    yiyong: "已使用",
    time: "2017.08.02",
    stars: [//优惠券的数量   当中的num值为1时变 "已使用" 的图片  
      { time: "2017.09.01", money: 20, man: 129, num: 1, yong: "已使用" },
      { time: "2017.08.21", money: 50, man: 170, num: 1, yong: "已过期" },
      { time: "2017.07.18", money: 60, man: 188, num: 0, yong: "未使用" },
      { time: "2017.07.10", money: 10, man: 100, num: 0, yong: "未使用" },

    ], // -1,0,1, 2,
  },

  
  //优惠券使用
  // shiyong: function (e) { 
  //   console.log(e.currentTarget.id)
  //   var index = e.currentTarget.id
  //   var indexs = "stars[" + index + "]"  // 选中的是当前点击的那张优惠券
  //   this.setData({
  //     [indexs]: 0, //该优惠券变成已使用状态
  //   })
  //   wx.navigateBack({
  //     delta: 1
  //   })
  // },
  //删除优惠券
  hideImg: function (e) {
    var index = e.currentTarget.id
    var stars = this.data.stars
    stars.splice(index, 1)
    console.log(stars)
    this.setData({
      stars: stars
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