// pages/02index_dianneiDD/index_dianneiDD.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"2017-08-25",
    time:["11:30","12:30","12:20"],//每次商品的时间
    number:[3,4,3], //每次商品的数量    、对应arr数组的每一项
    money:[18,35,22],//每次商品的总价    、对应arr数组的每一项
    arr:[   //订单数据
      [
        
        {name:"米饭",money:1,num:2},
        {name: "黄焖鸡", money: 16, num: 1 }
      ],
      [
        { name: "米饭", money: 1, num: 2 },
        { name: "黄焖鸭", money: 18, num: 1 },
        { name: "黄焖土豆", money: 15, num: 1 }
      ],
      [
        { name: "米饭", money: 1, num: 2 },
        { name: "黄焖排骨", money: 20, num: 1 }
      ],
    ]
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