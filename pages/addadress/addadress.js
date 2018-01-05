// pages/addadress/addadress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexs: [
      { name: '0', value: '先生', checked: true },
      { name: '1', value: '女士', checked: false }
    ],
    dianpu: "",
    fanwei: "",
    sendaddress: "",
    bianhao: "",
    chenghu: "",
    phone: "",
    sex: 0


  },
  radioChange: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  dianpuinput(e) {
    console.log(e);
    this.setData({
      dianpu: e.detail.value
    })
  },
  fanweiinput(e) {
    console.log(e);
    this.setData({
      fanwei: e.detail.value
    })
  },
  sendaddressinput(e) {
    console.log(e);
    this.setData({
      sendaddress: e.detail.value
    })
  },
  bianhaoinput(e) {
    console.log(e);
    this.setData({
      bianhao: e.detail.value
    })
  },
  chenghuinput(e) {
    console.log(e);
    this.setData({
      chenghu: e.detail.value
    })
  },
  phoneinput(e) {
    console.log(e);
    this.setData({
      phone: e.detail.value
    })
  },

  save() {
    let address = {
      dianpu: this.data.dianpu,
      fanwei: this.data.fanwei,
      sendaddress: this.data.sendaddress,
      bianhao: this.data.bianhao,
      chenghu: this.data.chenghu,
      phone: this.data.phone,
      sex: this.data.sex
    }
    console.log(JSON.stringify(address))
    wx.setStorage({
      key: "address",
      data: JSON.stringify(address),
      success: () => {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        })
      }
    })

  },
  submit(options) {
    console.log(options)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (!wx.getStorageSync("address")){
      return;
    }
    let _this = this;

    let data = JSON.parse(wx.getStorageSync("address"));

    console.log(data);


    for (let k = 0; k < _this.data.sexs.length; k++) {
      _this.data.sexs[k].checked = false;
      if (data.sex == _this.data.sexs[k].name) {
        _this.data.sexs[k].checked = true;
      }
    }
    _this.setData({
      dianpu: data.dianpu,
      fanwei: data.fanwei,
      sendaddress: data.sendaddress,
      bianhao: data.bianhao,
      chenghu: data.chenghu,
      phone: data.phone,
      sex: data.sex || 0,
      sexs: _this.data.sexs
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