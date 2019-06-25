// pages/01index_home/index_home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerbgSrc:"url(http://static-xiaoguotu.17house.com/xgt/m/00/1462726104127.jpg)",
    address: "江西省南昌市高新技术产业开发区紫阳大道2999号",
    telephone: "18179156341",
    zhanshiImg:[
      "http://img.itc.cn/photo/oNW5RVnLXdx",
      "http://img.itc.cn/photo/oNW5RVnLXdx",
      "http://img.itc.cn/photo/oNW5RVnLXdx",
      "http://img.itc.cn/photo/oNW5RVnLXdx",
      "http://img.itc.cn/photo/oNW5RVnLXdx",
      ],
    zizhiImg: [
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2908152610,2175643565&fm=26&gp=0.jpg",
    
     "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2908152610,2175643565&fm=26&gp=0.jpg"]
  },
  // 拨打电话
  telephone: function (e) {
    wx.makePhoneCall({
      phoneNumber: this.data.telephone,
    })

  },
  // 位置
  address: function (e) {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          address: "江西省南昌市高新技术产业开发区紫阳大道2999号",
        })
      }
    })

  },
  // 点击店铺展示图片预览
  yulan: function (e) {
    var current = e.target.dataset.src;  
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.zhanshiImg // 需要预览的图片http链接列表
    })

  },
  // 点击店铺资质图片预览
  zizhiyulan: function (e) {
    console.log(e.target.dataset.src)
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.zizhiImg // 需要预览的图片http链接列表
    })

  },
  // 点击简介
  jianjie:function(){
    wx.navigateTo({
      url: '../01index_jianjie/index_jianjie',
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