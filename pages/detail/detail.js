// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频info
    videoInfo: null,
    // 推荐info
    recommendInfo: [],
    // 评论info
    commentInfo: {}
  },

  // 根据视频id获取视频
  getVideoInfo(videoId) {
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id="+videoId,
      success(res) {
        if(res.data.code === 0) {
          that.setData({
            videoInfo: res.data.data.videoInfo
          })
        }
      }
    });
  },

  // 获取推荐视频
  getRecommendInfo(videoId) {
    let that = this;
    wx.request({
      url: "http://mock-api.com/mnEe4VnJ.mock/otherList?id="+videoId,
      success(res) {
        if(res.data.code === 0) {
          that.setData({
            recommendInfo: res.data.data.othersList
          })
        }
      }
    })
  },

  // 获取评论
  getCommentInfo() {
    let that = this;
    wx.request({
      url: "http://mock-api.com/mnEe4VnJ.mock/commentList",
      success(res) {
        if(res.data.code === 0) {
          that.setData({
            commentInfo: res.data.data.commentData
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收video的id
    let videoId = options.id;
    // 调用获取视频方法
    this.getVideoInfo(videoId);
    // 获取推荐视频方法
    this.getRecommendInfo(videoId);
    // 调用获取评论方法
    this.getCommentInfo();
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