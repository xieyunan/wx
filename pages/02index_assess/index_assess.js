// pages/02index_assess/index_assess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //评价数据
    pingjiaItem: [
      {
        imgurl: "http://img5.imgtn.bdimg.com/it/u=1627954464,371046155&fm=27&gp=0.jpg",
        name: "蓝天",
        main: "推荐大家尝尝这里的特色菜,推荐大家尝尝这里的特色菜菜的种类蛮多的, 味道都不错, 店家还提供了多种不同的口味来挑选, 推荐大家尝尝这里的特色菜!",
        data: "2017-05-23",
        time: "14:34:00",
       
      },
      {
        imgurl: "http://img5.imgtn.bdimg.com/it/u=1627954464,371046155&fm=27&gp=0.jpg",
        name: "白云",
        main: "菜的种类蛮多的, 味道都不错, 店家还提供了多种不同的口味来挑选, 推荐大家尝尝这里的特色菜!",
        data: "2017-06-13",
        time: "12:00:00",
        
      },
      {
        imgurl: "http://img5.imgtn.bdimg.com/it/u=1627954464,371046155&fm=27&gp=0.jpg",
        name: "黑土",
        main: "味道都不错, 店家还提供了多种不同的口味来挑选, 推荐大家尝尝这里的特色菜!",
        data: "2017-07-30",
        time: "08:30:00",
        
      },
      {
        imgurl: "http://img5.imgtn.bdimg.com/it/u=1627954464,371046155&fm=27&gp=0.jpg",
        name: "彩虹",
        main: "味道都不错, 店家还提供了多种不同的口味来挑选, 推荐大家尝尝这里的特色菜!",
        data: "2017-07-30",
        time: "08:30:00",
        
      },
    ],
    pingjiaImg:[ //评价图片  对应评价数据索引
      ["http://img3.imgtn.bdimg.com/it/u=7412154,3328464891&fm=11&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=7412154,3328464891&fm=11&gp=0.jpg","http://img3.imgtn.bdimg.com/it/u=7412154,3328464891&fm=11&gp=0.jpg"],
      ["http://img3.imgtn.bdimg.com/it/u=7412154,3328464891&fm=11&gp=0.jpg", "http://img3.imgtn.bdimg.com/it/u=7412154,3328464891&fm=11&gp=0.jpg"],
      ["http://img3.imgtn.bdimg.com/it/u=7412154,3328464891&fm=11&gp=0.jpg"],
      []
    
    
    ]
  },
  // 点击第一张图片预览
  yulanone: function (e) {
    var current = e.target.dataset.src;
    var index = e.currentTarget.id
    var pingjiaImg = this.data.pingjiaImg[index]
    console.log(e)
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: pingjiaImg // 需要预览的图片http链接列表
    })
  },
  // 点击第二张图片预览
  yulantwo: function (e) {
    var current = e.target.dataset.src;
    var index = e.currentTarget.id
    var pingjiaImg = this.data.pingjiaImg[index]
    console.log(e)
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: pingjiaImg // 需要预览的图片http链接列表
    })
  },
  // 点击三张图片预览
  yulanthree: function (e) {
    var current = e.target.dataset.src;
    var index = e.currentTarget.id
    var pingjiaImg = this.data.pingjiaImg[index]
    console.log(e)
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: pingjiaImg // 需要预览的图片http链接列表
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