// pages/shop/shop.js
var data = require("data.js");
console.log(data);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allPrice:0,
    counter:0,
    catagery:[],
    products:[],
    carsproduct: [],//最终的选中的商品
    customid:1,
    productdetail:null,
    ispopShow:false,
    animationshowdetails:{},
    animationshowcarslist: {},
    
  
    hasproduct:true,
    islike:false
  },


  //根据商品类别筛选商品
  selectProduct(arg){
    let cid = arg.currentTarget.dataset.cid;
    this.setData({
      customid: cid
    });

    // 先旋转后放大
    
    this.setDefaultProduct(cid);

  },

  setDefaultProduct(cid){
    for (let i = 0; i < data.products.length; ++i) {
      if (data.products[i].cid == cid) {
          this.data.products.push(data.products[i]);
      }
    }

    for (let j = 0; j < this.data.products.length;j++){
      for (let k = j + 1; k < this.data.products.length;k++){
        if (this.data.products[j].id == this.data.products[k].id){
          this.data.products.splice(k,1);
          break;
        }
      }
    }


    this.setData({
      products: this.data.products
    })



    let ispro = this.hasProduct(cid);
    this.setData({ hasproduct: ispro })
  },

  //某个分类下是否有商品
  hasProduct(cid) {
    for (let h = 0; h < this.data.products.length; h++) {
      if (this.data.products[h].cid == cid) {
        return true;
      }
    }
    return false;
  },

  //添加商品数量
  addPro(arg){
    let product = arg.currentTarget.dataset.product;
    this.addProId(product)
  },



  addProId(product){
    let products = this.data.products;
    for (let i = 0; i < products.length; ++i) {
      if (products[i].id == product.id) {
        if (!products[i].num) {
          products[i].num = 1;
        } else {
          products[i].num++;
        }
      }
    }
    this.setData({
      products: products
    })
    this.computedCars();
  },

  //减去商品数量
  jianPro(arg){
    let product = arg.currentTarget.dataset.product;
    this.jianProId(product);
 
  },

  jianProId(product){
    let products = this.data.products;
    for (let item of products) {
      if (item.id == product.id) {
        if (item.num >= 1) {
          item.num--;
        }
      }
    }
    this.setData({
      products: products
    })

    this.computedCars();
  },


  //计算已经选中的商品
  computedCars(){
    console.log(this.data.products);
    let filterArr = this.data.products.filter((product) => {
      return product.num>=0
    })

 
    for (let j = 0; j < this.data.catagery.length; ++j) {
      let num = 0;
      for(let i=0;i<filterArr.length;++i){
        if (this.data.catagery[j].id == filterArr[i].cid){
          this.data.catagery[j].num = num += filterArr[i].num;
         
        }
      }
    }

 


    this.setData({
      catagery: this.data.catagery,
      carsproduct: filterArr
    })



    function getAllPrice(all,item){
      return all += item.price * item.num;
    }
    function getCounter(num, item) {
      return num += item.num;
    }

    let allPrice = filterArr.reduce(getAllPrice,0);
    let counter = filterArr.filter((product) =>  product.num > 0).length;

    this.setData({allPrice, counter});





    if (allPrice>0){
      this.animationshowcarsall.bottom(0).step();
      this.setData({
        animationshowcarsall: this.animationshowcarsall.export()
      })
    }else{
      this.animationshowcarsall.bottom("-100rpx").step();
      this.setData({
        animationshowcarsall: this.animationshowcarsall.export()
      })
    }
    
  },

  //下一步按钮
  nexttap(){
    let carsproduct = JSON.stringify(this.data.carsproduct);
    wx.navigateTo({
      url: '/pages/balance/balance?carsproduct=' + carsproduct,
    })

   
  },

  //打开详情页
  godetail(arg){
    console.log(arg)
    let product = arg.currentTarget.dataset.product
    this.setData({
      productdetail: product,
      ispopShow:true
    })


    this.animation.opacity(1).step({
      duration: 500
    });
    this.setData({
      animationshowdetails: this.animation.export()
    })

    
  },

  //加入购物车
  addCars(e){
    if (this.data.productdetail.num >= 1){
      this.data.productdetail.num++;
    }else{
      this.data.productdetail.num = 1
    }

    this.setData({
      productdetail: this.data.productdetail
    })

  },

  //减去购物车
  jianCars(e){
    let product = e.currentTarget.dataset.product
    //this.jianProId(product.id);
    if (this.data.productdetail.num>=1){
      this.data.productdetail.num--;
    }
    
    this.setData({
      productdetail: this.data.productdetail
    })
  },

  //显示购物车列表
  showcarslist(){
    if (this.data.carsproduct.length == 0){
      this.computedCars()
    }

    this.animationshowcarslist.bottom("100rpx").step({
      duration: 500
    });
    this.setData({
      animationshowcarslist: this.animationshowcarslist.export()
    })
  },

  //关闭购物车列表
  closecarslist(){
    this.animationshowcarslist.bottom("-1205rpx").step({
      duration: 500
    });
    this.setData({
      animationshowcarslist: this.animationshowcarslist.export()
    })
  },

  //清空购物车
  clearcars(){
    
    let products = this.data.products;
    for (let i = 0; i < products.length; ++i) {
           if (products[i].num > 0) {
        products[i].num = 0;
      }
    }
    this.setData({
      products: products
    })


    let catagery = this.data.catagery;
    for (let i = 0; i < catagery.length; ++i) {
      catagery[i].num = 0;     
    }
    this.setData({
      catagery: catagery
    })




    this.setData({
      carsproduct:[],
      allPrice: 0,
      counter: 0,
    })


    
    this.animationshowcarslist.bottom("-1205rpx").step({
      duration: 500
    });
    this.setData({
      animationshowcarslist: this.animationshowcarslist.export()
    });


    this.animationshowcarsall.bottom("-100rpx").step();
    this.setData({
      animationshowcarsall: this.animationshowcarsall.export()
    })
  },
  //点赞操作
  zanlike(){
    let islike = this.data.islike ? false : true;
    this.setData({
      islike: islike
    })



    let products = this.data.products;
    for (let i = 0; i < products.length; i++) {

      if (products[i].id == this.data.productdetail.id) {
        if (this.data.islike){
          products[i].like++;
          this.data.productdetail.like++;
        }else{
          products[i].like--;
          this.data.productdetail.like--;
        }
       
        this.setData({
          products: products,
          productdetail: this.data.productdetail
        });
        console.log(this.data.products[i]);
        break;
      }
    }

    
  },

  //最终加入购物车
  finalAddCars(){
    let products = this.data.products;
    for (let i = 0; i < products.length;i++){

      if (products[i].id == this.data.productdetail.id){
        products[i] = this.data.productdetail;
        this.setData({
          products: products,
          islike:false
        });
        this.computedCars();
        break;
      }
    }



    this.hidepop()
    
  },


  hidepop(){
    this.animation.opacity(0).step({
      duration:500
    });
    this.setData({animationshowdetails: this.animation.export()})
    setTimeout(()=>{
      this.setData({
        ispopShow: false
      });
    },500);

    this.setData({
      islike: false
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation;



    var animationshowcarslist = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animationshowcarslist = animationshowcarslist;


    var animationshowcarsall = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })

    this.animationshowcarsall = animationshowcarsall;



    this.setDefaultProduct(1)
    this.setData({
      catagery: data.catagery
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
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationshowdetails: this.animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationshowdetails: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationshowdetails: this.animation.export()
    })
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