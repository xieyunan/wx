// pages/00index_yuding/index_yuding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2017-08-21',
    time: '12 : 01',
    yudingInput:"",
    table: ["1-2 人", "3-4 人", "4-6 人", "6-8 人", "8-12 人", "12-20 人"],

  },
  // 日期选择
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 时间选择
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  // 选择桌位
  zhuowei:function(e){
    
    var index = e.currentTarget.id
    var number = this.data.table[index]
    console.log(number)
    this.setData({
      yudingInput:number
    })
  },
  // 席位预定提交
  xiweiSubmit: function (e) {
    
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