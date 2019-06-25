// pages/00index_waimai/index_waimai.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    // 外卖数据     
    activeIndex02: 0, //菜品对应的
    tabs02: ["家常小吃", "家常大吃", "家常中吃", "不家常吃", "家常不吃", "家常狠吃", "家常吃撑", "家常吃腻", "家常猛吃", "家没的吃",],
    tabs02index: 0,  //对应tab02的菜品    
    // 家常小吃数据
    xiaochi: [
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "黑木耳莴笋炒肉", yueshou: "35", haoping: "100%", money: 16, yuanjia: "￥18", youhui: "商家特价优惠" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "白木耳莴笋炒肉", yueshou: "350", haoping: "100%", money: 20, yuanjia: "￥25", youhui: "商家特价优惠" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "绿木耳莴笋炒肉", yueshou: "3500", haoping: "100%", money: 30, yuanjia: "￥40", youhui: "商家特价优惠" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "黑木耳莴笋炒肉", yueshou: "35", haoping: "100%", money: 16, yuanjia: "", youhui: "" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "白木耳莴笋炒肉", yueshou: "350", haoping: "100%", money: 20, yuanjia: "", youhui: "" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "绿木耳莴笋炒肉", yueshou: "3500", haoping: "100%", money: 30, yuanjia: "", youhui: "" },],
      //家常大吃数据
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "黑木耳莴笋炒肉", yueshou: "35", haoping: "100%", money: 16, yuanjia: "￥18", youhui: "商家特价优惠" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "白木耳莴笋炒肉", yueshou: "350", haoping: "100%", money: 20, yuanjia: "￥25", youhui: "商家特价优惠" },],
      //家常中吃数据
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "白木耳莴笋炒肉", yueshou: "350", haoping: "100%", money: 20, yuanjia: "￥25", youhui: "商家特价优惠" },],
      //不家常吃数据
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "黑木耳莴笋炒肉", yueshou: "35", haoping: "100%", money: 16, yuanjia: "￥18", youhui: "商家特价优惠" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "白木耳莴笋炒肉", yueshou: "350", haoping: "100%", money: 20, yuanjia: "￥25", youhui: "商家特价优惠" },],
      //家常不吃数据
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "白木耳莴笋炒肉", yueshou: "350", haoping: "100%", money: 20, yuanjia: "￥25", youhui: "商家特价优惠" },],
      //家常狠吃数据
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "黑木耳莴笋炒肉", yueshou: "35", haoping: "100%", money: 16, yuanjia: "￥18", youhui: "商家特价优惠" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "白木耳莴笋炒肉", yueshou: "350", haoping: "100%", money: 20, yuanjia: "￥25", youhui: "商家特价优惠" },],
      //家常吃撑数据
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "黑木耳莴笋炒肉", yueshou: "35", haoping: "100%", money: 16, yuanjia: "￥18", youhui: "商家特价优惠" },],
      //家常吃腻数据
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "黑木耳莴笋炒肉", yueshou: "35", haoping: "100%", money: 16, yuanjia: "￥18", youhui: "商家特价优惠" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "白木耳莴笋炒肉", yueshou: "350", haoping: "100%", money: 20, yuanjia: "￥25", youhui: "商家特价优惠" },],
      //家猛吃数据
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "黑木耳莴笋炒肉", yueshou: "35", haoping: "100%", money: 16, yuanjia: "￥18", youhui: "商家特价优惠" },],
      //家没的吃数据
      [
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "黑木耳莴笋炒肉", yueshou: "35", haoping: "100%", money: 16, yuanjia: "￥18", youhui: "商家特价优惠" },
        { imgurl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504069360370&di=96f83b45464e0db1d8799705a38a04ca&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg", name: "白木耳莴笋炒肉", yueshou: "350", haoping: "100%", money: 20, yuanjia: "￥25", youhui: "商家特价优惠" },]
    ],
    // 购物车数据
    onoff:false,
    qisong: 20,//起送
    number: 0, //菜篮子的数量
    objmoney: 0, //总价
    gouwuche:[], //购物车
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

        });
      }
    });
  },
  //购物车点击其他空白隐藏
  bgshow:function(e){

    this.setData({
      onoff: (!this.data.onoff)
    })
  },
  //点击提交按钮
  submit: function (e) {
    wx.navigateTo({
      url: '../00index_xiadan/index_xiadan', //跳转到下单页面
    })
  },
  // 外卖点菜类型切换
  tab02Click: function (e) {
    //console.log(e)    
    var tabs02index = e.currentTarget.dataset.tabsindex
    this.setData({
      tabs02index: tabs02index,
      activeIndex02: e.currentTarget.id,
    });
  },
  //点击菜跳转相应的菜品
  caixiangqing: function () {
    wx.navigateTo({ url: '/pages/00index_xiangqing/index_xiangqing' })
  },
  //点击加号
  tianjia: function (e) {

    //console.log(e)
    
    var active02index = e.currentTarget.dataset.activeindex  // 选中的是哪种菜的索引
    var youhuiindex = e.currentTarget.dataset.youhuiindex  // 选中的是哪种菜的第几个索引
    var numbers = e.currentTarget.dataset.numbers + 1 //购物篮数字+1
    var gouwuche = this.data.gouwuche;//购物车
    var obj = this.data.xiaochi[active02index][youhuiindex].money;//当前点击的菜品的价格
    var objmoney = this.data.objmoney;   //总价
    var objname = this.data.xiaochi[active02index][youhuiindex].name;//当前点击的菜品的名称
    var objsrc = this.data.xiaochi[active02index][youhuiindex].imgurl;//当前点击的菜品的图片地址
    var newarr = gouwuche.push({ name: objname, money: obj, imgurl: objsrc, num: 1 })//添加到购物车 
    // console.log(gouwuche)
    this.setData({
      objmoney: objmoney + obj, //总价
      gouwuche:gouwuche,
      number: numbers,
    })
  },
  // 购物车显示隐藏
  gouwuShow:function(e){
    this.setData({
      onoff:(!this.data.onoff)

    })
  },
  //购物车清空
  qingkong:function(){
    this.setData({
      gouwuche:[],
      number:0,
      objmoney:0,
      onoff: (!this.data.onoff),
    })
  },
  //点击购物车里面的加号
  shoptianjia:function(e){
    var number = this.data.number
    var objmoney = this.data.objmoney
    var shopIndex = e.currentTarget.id
    
    var gouwuche = this.data.gouwuche;//购物
    var nums = "gouwuche["+shopIndex+"].num"
    var num = gouwuche[shopIndex].num
    var money = gouwuche[shopIndex].money
    //console.log(nums)
      this.setData({
        number:number+1,
        [nums]:num+=1,
        objmoney: objmoney + money
      })
  },
  //点击购物车里面的减号
  jian: function (e) {
    var number = this.data.number
    var objmoney = this.data.objmoney
    var shopIndex = e.currentTarget.id
    var gouwuche = this.data.gouwuche;//购物
    var nums = "gouwuche[" + shopIndex + "].num"
    var num = gouwuche[shopIndex].num
    var money = gouwuche[shopIndex].money
    this.setData({
      number: number - 1,
      [nums]: num -= 1,
      objmoney: objmoney - money
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