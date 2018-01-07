// component/orderlist/orderlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderinfo:{
      type:Object,
      value:"",
      observer(oldval,newval){

      }
    }
  },



  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //重新下单 再来一单
    againdownorder(){
      console.log(this.data.orderinfo.productlist);
      wx.navigateTo({
        url: '/pages/balance/balance?carsproduct=' + JSON.stringify(this.data.orderinfo.productlist),
      })
    },

    //取消订单
    cancleorder(){
      wx.showModal({
        title: '',
        content: '是否确认要取消订单？',
        cancelColor:"#0079fe",
        confirmColor: "#0079fe",
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  attached(){

    let orderlist = this.data.orderinfo;
  
    this.setData({
      orderinfo: orderlist
    })
  }
})
