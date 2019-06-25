// pages/00index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    youhuiBG:"url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068974198&di=4ce38a2f64d9c8f0727f1749f093f848&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2Ftupian%2F20141027%2Fkaoyangtuimeishi_3322711.jpg)",
    mode: "scaleToFill",
    arr: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504070162504&di=7ce7cc3460fb8b1483e96fafa2099eaf&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F42a98226cffc1e17c68d12304090f603738de985.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504070162504&di=36946e2b848fb1c60b30ff48f5479528&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1406%2F20%2Fc2%2F35487604_1403249143274.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504070162505&di=841371b93ec0587bee8992c8a92ada11&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F279759ee3d6d55fbef918d0267224f4a20a4ddbb.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504070162505&di=1e6a3d4c39e277c889f2d8ae74b26c56&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F562c11dfa9ec8a13ddf900c5fd03918fa0ecc030.jpg",
    
    ],  //存放图片的数组
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    // address: "江西省南昌市高新技术产业开发区紫阳大道2999号",
    // telephone: "18179156341",
    //本店特色数据
    // tese: [
    //   { imgsrc: "../img/tuijian.jpg", name: "黑木耳莴笋炒肉", num: 3481 },
    //   { imgsrc: "../img/tuijian.jpg", name: "白木耳莴笋炒肉", num: 3482 },
    //   { imgsrc: "../img/tuijian.jpg", name: "紫木耳莴笋炒肉", num: 3483 },
    //   { imgsrc: "../img/tuijian.jpg", name: "粉木耳莴笋炒肉", num: 3484 },
    // ],

    //本店特色数据
    xinpinNum: 0,
    xinpinIndex: 0,
    xinpin: [
      { bgsrc: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068601061&di=0f55ffe311866a59e615d79a62fec9cd&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F120528%2F188952-12052Q25F491.jpg)", name: "红烧排骨", weidao: "味道香咸 排骨酥烂 色泽金红", eat: "老少皆宜", nums: 0 },
      { bgsrc: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068601061&di=682025039babe2b5115a2e2eaf78a73e&imgtype=0&src=http%3A%2F%2Fpic5.photophoto.cn%2F20071221%2F0042040377755194_b.jpg)", name: "红烧鲤鱼", weidao: "味道香咸 鱼肉香嫩 色泽金红", eat: "老少皆宜", nums: 1 },
      { bgsrc: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068601051&di=5967ed23badd1910890b4199ad352c59&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fa1%2F148%2Fd%2F115.jpg)", name: "回锅肉", weidao: "味道香辣 回味无穷 色泽金红", eat: "老少皆宜", nums: 2 },
      { bgsrc: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068601058&di=d5ee72cfa350a7d6c16c92739c4fdc8b&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20151201%2Ftooopen_sy_150066075918.jpg)", name: "红烧鲸鱼", weidao: "味道香辣 回味无穷 色泽金红", eat: "老少皆宜", nums: 3 },
      { bgsrc: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068601053&di=6c381a936b9e9b7a8c1b78f6cb195514&imgtype=0&src=http%3A%2F%2Fwww.pp3.cn%2Fuploads%2F201701%2F2017010902.jpg)", name: "回锅肉03", weidao: "味道香辣 回味无穷 色泽金红", eat: "老少皆宜", nums: 4 },
    ],
    //评价数据
    pingjiaItem: [
      {
        imgurl: "http://img5.imgtn.bdimg.com/it/u=1627954464,371046155&fm=27&gp=0.jpg",
        name: "蓝天",
        main: "推荐大家尝尝这里的特色菜,推荐大家尝尝这里的特色菜菜的种类蛮多的, 味道都不错, 店家还提供了多种不同的口味来挑选, 推荐大家尝尝这里的特色菜!",
        data: "2017-05-23",
        time: "14:34:00"
      },
      {
        imgurl: "http://img5.imgtn.bdimg.com/it/u=1627954464,371046155&fm=27&gp=0.jpg",
        name: "白云",
        main: "菜的种类蛮多的, 味道都不错, 店家还提供了多种不同的口味来挑选, 推荐大家尝尝这里的特色菜!",
        data: "2017-06-13",
        time: "12:00:00"
      },
      // {
      //   imgurl: "http://img5.imgtn.bdimg.com/it/u=1627954464,371046155&fm=27&gp=0.jpg",
      //   name: "黑土",
      //   main: "味道都不错, 店家还提供了多种不同的口味来挑选, 推荐大家尝尝这里的特色菜!",
      //   data: "2017-07-30",
      //   time: "08:30:00"
      // },
    ],
    //猜你喜欢数据
    // like: [
    //   [
    //     { bgsrc: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068325147&di=79eb45e55bdfb4ca999a0dbf900e9850&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd4%2F1509%2Ff1%2F22710e549b52b.png)", name: "酸辣烤螃蟹", weidao: "营养丰富 外焦里嫩", num: 3480 },
    //     { bgsrc: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068325147&di=79eb45e55bdfb4ca999a0dbf900e9850&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd4%2F1509%2Ff1%2F22710e549b52b.png)", name: "酸辣烤龙虾", weidao: "营养丰富 外嫩里焦", num: 5000 },
    //   ],
    //   [
    //     { bgsrc: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068325147&di=79eb45e55bdfb4ca999a0dbf900e9850&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd4%2F1509%2Ff1%2F22710e549b52b.png)", name: "酸辣烤鲍鱼", weidao: "营养丰富 外焦里焦", num: 3590 },
    //     { bgsrc: "url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504068325147&di=79eb45e55bdfb4ca999a0dbf900e9850&imgtype=0&src=http%3A%2F%2Fimg1.qunarzz.com%2Ftravel%2Fd4%2F1509%2Ff1%2F22710e549b52b.png)", name: "酸辣烤海参", weidao: "营养丰富 外嫩里嫩", num: 6666 },
    //   ],
     

    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  // 新品下一个
  xinpinNext: function (e) {
    var i = this.data.xinpinNum;
    var leng = this.data.xinpin.length;
    i++;
    if (i > leng - 1) { i = 0 }
    //console.log(i)
    this.setData({
      xinpinNum: i,
    })
  },
  // 新品上一个
  xinpinPrev: function (e) {
    var n = this.data.xinpinNum;
    var leng = this.data.xinpin.length;
    n--;
    if (n < 0) { n = leng - 1 }
    //console.log(n)
    this.setData({
      xinpinNum: n,
    })
  },
  // 拨打电话
  telephone: function (e) {
    wx.makePhoneCall({
      phoneNumber: this.data.telephone,
    })

  },
  xinpinmenu:function(e){
    wx.navigateTo({
      url: '../00index_xiangqing/index_xiangqing',
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
  // 点击图片详情跳转
  tuijian: function () {
    wx.navigateTo({ url: '/pages/00index_xiangqing/index_xiangqing' })
  },
  // 点击本店特色跳转特色菜单页
  tuijianXQ: function () {
    wx.navigateTo({ url: '/pages/00index_tese/index_tese' })
  },
  //点击猜你喜欢图片跳转
  like: function () {
    wx.navigateTo({ url: '/pages/00index_xiangqing/index_xiangqing' })
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