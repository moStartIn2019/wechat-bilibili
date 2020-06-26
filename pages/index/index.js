Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    navList: [],
    // 导航被点击的当前索引
    navCurrentIndex: 0,
    // 获取轮播图数据
    swiperList: [],
    // 获取视频列表数据
    videoList: []
  },

  // 获取首页导航的数据
  getNavList() {
    // 防止this不知道是谁，this是微信内部的对象
    let that = this;
    // 利用小程序内置的发送请求方法
    wx.request({
      url:"http://mock-api.com/mnEe4VnJ.mock/navList",
      success(res) {
        if(res.data.code === 0){
          that.setData({
            navList: res.data.data.navList
          })
        }
      }
    })
  },

  // 导航部分绑定的bindtap事件
  activeNav(e) {
    let that = this;
    // console.log(e)
    that.setData({
      navCurrentIndex: e.target.dataset.index
    })
  },

  // 获取轮播图数据
  getSwiperList() {
    let that = this;
    wx.request({
      url: "http://mock-api.com/mnEe4VnJ.mock/swiperList",
      success(res) {
        if(res.data.code === 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
      }
    })
  },

  // 获取视频列表数据
  getVideoList() {
    let that = this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success(res) {
        if(res.data.code === 0) {
          that.setData({
            videoList: res.data.data.videoList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用获取首页导航数据的方法
    this.getNavList();
    // 调用获取轮播图数据的方法
    this.getSwiperList();
    // 调用获取视频列表数据的方法
    this.getVideoList();
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