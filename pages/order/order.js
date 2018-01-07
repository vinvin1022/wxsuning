// pages/order/order.js
let orderinfolist = require("./orderinfolist.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderinfolist:"",
    intoview:""
  },
  upscroll(ev){
    console.log(ev)
    wx.showNavigationBarLoading();
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(() => {
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 3000)
  },
  onReachBottom: function () {
    console.log("onReachBottom")
    console.log('hi')
    setTimeout(() => {
    
    }, 2000)
  },


  downscroll(ev){
    console.log(ev)
    let newdata = [{
      id: 11,
      productlist: [
        { cid: 2, title: "脉动4", price: "51.5", imgurl: "/images/149509134514834638.png", like: 2, num: 10 },
        { cid: 1, title: "红牛2", price: "3.5", imgurl: "/images/149509134514834638.png", like: 2, num: 2 }
      ], status: 1, datetime: "2018-01-03 18：35",
    }, {
      id: 12,
      productlist: [
        { cid: 2, title: "脉动4", price: "51.5", imgurl: "/images/149509134514834638.png", like: 2, num: 10 },
        { cid: 1, title: "红牛2", price: "3.5", imgurl: "/images/149509134514834638.png", like: 2, num: 2 }
      ], status: 2, datetime: "2018-01-03 18：35",
    }, {
      id: 13,
      productlist: [
        { cid: 2, title: "脉动4", price: "51.5", imgurl: "/images/149509134514834638.png", like: 2, num: 10 },
        { cid: 1, title: "红牛2", price: "3.5", imgurl: "/images/149509134514834638.png", like: 2, num: 2 }
      ], status: 1, datetime: "2018-01-03 18：35",
    }, {
      id: 14,
      productlist: [
        { cid: 2, title: "脉动4", price: "51.5", imgurl: "/images/149509134514834638.png", like: 2, num: 10 },
        { cid: 1, title: "红牛2", price: "3.5", imgurl: "/images/149509134514834638.png", like: 2, num: 2 }
      ],
      status: 1, datetime: "2018-01-03 18：35",
    }, {
      id: 15,
      productlist: [
        { cid: 2, title: "脉动4", price: "51.5", imgurl: "/images/149509134514834638.png", like: 2, num: 10 },
        { cid: 1, title: "红牛2", price: "3.5", imgurl: "/images/149509134514834638.png", like: 2, num: 2 }], status: 0, datetime: "2018-01-03 18：35",
    }];
    wx.showLoading({
      title: '获取当中',
    })

    setTimeout(()=>{
    
      let newarr = this.data.orderinfolist.concat(newdata);
      this.setData({
        orderinfolist: this.computedprice(newarr)
      })
      // this.setData({
      //   intoview: "a"+(this.data.orderinfolist.length-1)
      // })
      wx.hideLoading();
    },3000)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let allprice = 0;
    let infolist = orderinfolist.orderinfolist;
    this.setData({
      orderinfolist: this.computedprice(infolist)
    })
  },
  computedprice(infolist){
    infolist.forEach((item, index) => {
      if (item["allprice"] == undefined){
        item["allprice"] = item["productlist"].reduce((allprice, pro) => allprice += (parseFloat(pro.price) * parseInt(pro.num)), 0);
        item["allcounter"] = item["productlist"].length;
      }
    })

    return infolist
    
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