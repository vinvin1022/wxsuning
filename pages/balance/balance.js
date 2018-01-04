// pages/balance/balance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[],
    allprice:0,
    discount:10,
    expressfee:0,
    address: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let product = JSON.parse(options.carsproduct).filter((product)=>product.num>0);
    let address = wx.getStorageSync("address") ? JSON.parse(wx.getStorageSync("address")) : "新增收货地址";
    console.log(address);
    this.setData({
      product,
      address
    });

    this.setData({
      allprice: this.computedprice()
    })
  },


  computedprice(){
    return this.data.product.reduce((price,product)=>{
      return price += parseFloat(product.price * product.num);
    }, (this.data.expressfee - this.data.discount))
  },
  //跳转到新增收货地址
  goAddAddress(){
    wx.navigateTo({
      url: '/pages/addadress/addadress',
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    console.log("onReady")
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    console.log("onShow")
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