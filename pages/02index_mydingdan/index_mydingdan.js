// pages/02index_mydingdan/index_mydingdan.js
var sliderWidth = 96;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["全部", "待付款", "已接单", "已完成"], //导航tab
    activeIndex: 0,   //导航对应索引
    sliderOffset: 0,  //滑块偏移
    sliderLeft: 0,    //偏移的left值

    weinum: [5, 2],        //未确认每一次订单的数量
    weimoney: [104, 32],  //未确认每一次订单的金额
    yinum: [5, 3],        //已确认每一次订单的数量
    yimoney: [146, 72],  //已确认每一次订单的金额
    weipingnum: [8, 3],  //已完成未评价每一次订单的数量
    weipingmoney: [1280, 58],  //已完成未评价每一次订单的金额
    yipingnum: [3, 3],  //已完成已评价每一次订单的数量
    yipingmoney: [100, 58],  //已成为已评价每一次订单的金额
    // 未确认0
    wei: [
      [
        { name: "黑木耳莴笋炒肉", money: 16, yuanjia: 18, num: 2 },
        { name: "白木耳莴笋炒肉", money: 26, yuanjia: 32, num: 2 },
        { name: "紫木耳莴笋炒肉", money: 20, yuanjia: 25, num: 1 },
      ],
      [
        { name: "黑木耳莴笋炒肉", money: 16, yuanjia: 18, num: 2 },
      ]
    ],
    // 已经确认1
    yi: [
      [
        { name: "红木耳莴笋炒肉", money: 30, yuanjia: 38, num: 3 },
        { name: "黄木耳莴笋炒肉", money: 28, yuanjia: 40, num: 2 },
      ],
      [

        { name: "白木耳莴笋炒肉", money: 26, yuanjia: 32, num: 2 },
        { name: "紫木耳莴笋炒肉", money: 20, yuanjia: 25, num: 1 },
      ]
    ],
    // 已经完成2未评价
    weiping: [
      [
        { name: "蓝木耳莴笋炒肉", money: 40, yuanjia: 55, num: 2 },
        { name: "绿木耳莴笋炒肉", money: 200, yuanjia: 400, num: 6 },
      ],
      [
        { name: "黑木耳莴笋炒肉", money: 16, yuanjia: 18, num: 2 },
        { name: "白木耳莴笋炒肉", money: 26, yuanjia: 32, num: 1 },

      ]
    ],
    //已完成 已评价
    yiping: [
      [
        { name: "蓝木耳莴笋炒肉", money: 40, yuanjia: 55, num: 2 },
        { name: "绿木耳莴笋炒肉", money: 20, yuanjia: 40, num: 1 },
      ],
      [
        { name: "黑木耳莴笋炒肉", money: 16, yuanjia: 18, num: 2 },
        { name: "白木耳莴笋炒肉", money: 26, yuanjia: 32, num: 1 },

      ]
    ],

  },
  // 导航tab切换
  tabClick: function (e) {
    //console.log(e)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  // 下单
  xiadan: function (e) {
    //console.log(e.currentTarget.id)
    this.setData({

    })
    wx.navigateTo({
      url: "../00index_xiadan/index_xiadan"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        //console.log(res.windowWidth)
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    

    //console.log(quanbu.length)

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