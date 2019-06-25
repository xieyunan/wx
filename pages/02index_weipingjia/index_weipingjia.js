// pages/02index_weipingjia/index_weipingjia.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danhao: "2017082610130",//订单号
    time: "13:02",             //配送时间
    beizhu: "多放辣椒,少放木耳多放肉,能放多少放多少",//备注
    tejia: 0,                      //特价
    zongjia: 0,                    //总价
    address: "南昌市高新技术产业开发区紫阳大道2999号", //收货地址
    addressXX: "紫阳明珠B1栋602室",                 //收货详细地址
    foodarr: [                          //点了多少菜
      { name: "黑木耳莴笋炒肉", money: 16, yuanjia: 18, num: 2 },//4
      { name: "白木耳莴笋炒肉", money: 18, yuanjia: 22, num: 1 },//4
      { name: "紫木耳莴笋炒肉", money: 30, yuanjia: 38, num: 5 }//40
    ],
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