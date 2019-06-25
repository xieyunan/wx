// pages/02index_myxiwei/index_myxiwei.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: [3, 4, 3], //每次商品的数量    、对应arr数组的每一项
    money: [18, 35, 22],//每次商品的总价    、对应arr数组的每一项
    arr: [   //订单数据
        { name: "5-10人包厢",  num: 2,date:'2017-08-02',time:'12:03' },
        { name: "16号", num: 5, date: '2017-08-09', time: '11:26'  },          
        { name: "2号", num: 2, date: '2017-08-12', time: '12:55'  },
        { name: "3号", num: 10, date: '2017-08-15', time: '12:31'  },
        { name: "4号", num: 6, date: '2017-08-16', time: '12:24'  },    
        { name: "1号", num: 4, date: '2017-08-27', time: '12:16' },
        { name: "7号", num: 3, date: '2017-09-01', time: '12:00' }
      
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