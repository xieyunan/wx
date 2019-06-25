// pages/00index_xiadan/index_xiadan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    youhuiquan:[],
    peisongTime:"13:02",             //配送时间
    tejia:0,                      //特价
    zongjia:0,                    //总价
    indexs: 1,                    //0是微信支付 1是会员卡支付
    fapiaoindex:0,
    address:[], //收货地址
    foodarr: [                          //点了多少菜
      { name: "黑木耳莴笋炒肉", money: 16, yuanjia: 18, num: 2 },//4
      { name: "白木耳莴笋炒肉", money: 18, yuanjia: 22, num: 1 },//4
      { name: "紫木耳莴笋炒肉", money: 30, yuanjia: 38, num: 5 }//40
    ],
    
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
  // 选择外卖支付 
  waimaiZF: function (e) {
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
 
  //点击优惠
  youHui:function(e){
    wx.navigateTo({
      url: '../02index_myyouhui/index_myyouhui',
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
      yuanjia = yuanjia+foodarr[i].yuanjia*foodarr[i].num // 总原价      
      money = money + foodarr[i].money * foodarr[i].num  //  总实价
      var tejia = yuanjia - money
    }
    //console.log(money)
    this.setData({
         tejia:tejia,
         zongjia: money,
    })
  },
  
  //要发票
  fapiaoyes:function(e){
   
    var fapiaoindex = e.currentTarget.dataset.fapiaoid
    console.log(fapiaoindex)
    
    this.setData({
      fapiaoindex: fapiaoindex
    })
    wx.navigateTo({
      url: '../00index_fapiao/index_fapiao',
    })
  },
  //不要发票
  fapiaono: function (e) {
    var fapiaoindex = e.currentTarget.dataset.fapiaoid
    console.log(fapiaoindex)
    this.setData({
      fapiaoindex: fapiaoindex
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