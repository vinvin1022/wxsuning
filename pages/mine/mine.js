// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    sendnei:null
  },
  showproductpop(){
    let feedback = this.selectComponent("#feedback");
    feedback.showpop();
    let sendnei = {
      title: "期待商品",
      des: "是否有什么珍品，是您十分喜欢，而Moz宅还没开卖的呢？告诉我们他将很快出现的商品列表中哦！",
      querenbtn: "确认提交",
      placeholder: "您期待的珍品是什么？采纳后我们将为您免费送上门",
      type:1
    }
    this.setData({
      sendnei: sendnei
    })
    this.feedback.setData({iserror:false})
  },

  showfeedbackpop(){
    let sendnei = {
      title: "意见反馈",
      des: "感谢您的宝贵意见，来帮助我们发现问题，改善产品。您的支持就是我们的动力",
      querenbtn: "确认反馈",
      placeholder: "请填写您的宝贵意见",
      type: 2
    }
    this.setData({
      sendnei: sendnei
    })
    
    this.feedback.showpop();
    this.feedback.setData({ iserror: false })
    
  },
  querenmsg(ev){
    console.log(ev.detail)
    this.feedback.hidepop();
    wx.showToast({
      title: ev.detail.type == 1 ? '提交成功' : "反馈成功",
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.feedback = this.selectComponent("#feedback");
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