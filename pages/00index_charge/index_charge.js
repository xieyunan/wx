// pages/00index_charge/index_charge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 0,  //余额
    indexs: 0, //充值优惠
    chargeInput: '',  //输入充值的金额
    chargeBalance: 0, //选中优惠金额
    charge: [     //多冲多送数据
      [{ money: 50, give: "", id: 1 }, { money: 100, give: 10, id: 2 }, { money: 200, give: 30, id: 3 },],
      [{ money: 500, give: 80, id: 4 }, { money: 800, give: 100, id: 5 }, { money: 1000, give: 200, id: 6 },],
      [{ money: 1500, give: 300, id: 7 }, { money: 2000, give: 500, id: 8 }, { money: 3000, give: 800, id: 9 },]
    ],
  },
  //点击充值优惠
  charges: function (e) {
    var indexs = e.currentTarget.dataset.id
    this.setData({
      chargeBalance: e.currentTarget.id,
      indexs: indexs
    })
  },
  //输入充值的金额
  chargeInput: function (e) {
    this.setData({
      chargeInput: e.detail.value
    })
  },
  //充值按钮
  charge: function (e) {
    var moneys = this.data.money;
    var chargeInput = this.data.chargeInput;
    var chargeBalance = this.data.chargeBalance;
    var money = (chargeInput * 1) + (chargeBalance * 1);
    money += moneys
    wx.showModal({
      title: '提示',
      content: '充值成功',
      confirmColor: '#ff253d',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          //console.log('我知道了')
        }
        // wx.navigateBack({
        //   delta:1
        // })
      }
    });
    this.setData({
      money: money,
      indexs: 0,
      chargeInput: '',
      chargeBalance: 0,
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