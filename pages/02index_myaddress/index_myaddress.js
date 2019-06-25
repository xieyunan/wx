// pages/02index_myaddress/index_myaddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moren:"南昌市高新技术产业开发区紫阳大道2999号",
    morenXX:"紫阳明珠B1栋602室",
    tianjiashow:true,
    tianjiaadd:"",
    tianjiaaddXX:"",
    addindex: 0,
    addmain: [
      //  { add: "南昌市高新技术产业开发区紫阳大道2999号", addXX: "紫阳明珠B1栋602室",name:"张三",phone:"12345678999" },
      //  { add: "南昌市高新技术产业开发区紫阳大道3000号", addXX: "紫阳明珠B1栋602/608室", name: "李四", phone: "98765412300"},
      //  { add: "南昌市高新技术产业开发区紫阳大道3005号", addXX: "紫阳明珠B1栋608室", name: "老王", phone: "5698741320"},

    ],
  },
  // 删除地址
  deleteadd:function(e){
    var indexs = e.currentTarget.dataset.indexs
    var addmain = this.data.addmain
    addmain.splice(indexs,1)
    console.log(addmain)
    this.setData({
      addmain:addmain
    })
  },
  //选择其中一个地址
  addshow: function (e) {
    var index = e.currentTarget.id
    console.log(index)
    this.setData({
      addindex:index
    })
  },
  moren:function(e){
    var index = e.currentTarget.id
    var moren = this.data.addmain[index].add
    var morenXX = this.data.addmain[index].addXX
    this.setData({
      moren: moren,
      morenXX: morenXX,
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