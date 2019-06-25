// pages/00index_yuyuexiadan/index_yuyuexiadan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexs: 1,                    //0是微信支付 1是会员卡支付
    tejia: 0,                      //特价
    zongjia: 0,
    time: '12 : 01', //用餐时间
    foodarr: [                          //点了多少菜
      { name: "黑木耳莴笋炒肉", money: 16, yuanjia: 18, num: 2 },//4
      { name: "白木耳莴笋炒肉", money: 18, yuanjia: 22, num: 1 },//4
      { name: "紫木耳莴笋炒肉", money: 30, yuanjia: 38, num: 5 }//40
    ],
    youhuiquan: [],
    table: ["1-2 人", "3-4 人", "4-6 人", "6-8 人", "8-12 人", "12-20 人"],
    yudingValue: "",
  },
  // 选择微信 
  weixin: function (e) {
    console.log(e.currentTarget.id)
    this.setData({

      indexs: e.currentTarget.dataset.zhifuid
    });
  },
  // 选择会员
  xianjin: function (e) {
    console.log(e.currentTarget.id)
    this.setData({

      indexs: e.currentTarget.dataset.zhifuid
    });
  },
  //点击优惠
  youHui: function (e) {
    wx.navigateTo({
      url: '../02index_myyouhui/index_myyouhui',
    })
  },
  // 选择支付 
  dianneiZF: function (e) {
    console.log(e.currentTarget.id)
    wx.showModal({
      title: '提示',
      content: '下单成功',
      confirmColor: '#ff253d',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('我知道了')
        }
        // wx.navigateBack({
        //   url: "../02index_my/index_my",
        // })
      }
    });
  },
  
  // 选择桌位
  zhuowei: function (e) {

    var index = e.currentTarget.id
    var number = this.data.table[index]
    console.log(number)
    this.setData({
      yudingValue: number
    })
  },
  // 时间选择
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var foodarr = this.data.foodarr;
    var yuanjia = 0;
    var money = 0;
    for (var i = 0, lenI = foodarr.length; i < lenI; ++i) {
      yuanjia = yuanjia + foodarr[i].yuanjia * foodarr[i].num // 总原价      
      money = money + foodarr[i].money * foodarr[i].num  //  总实价
      var tejia = yuanjia - money
    }
    //console.log(money)
    this.setData({
      tejia: tejia,
      zongjia: money,
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