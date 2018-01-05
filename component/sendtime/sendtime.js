// component/sendtime/sendtime.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationsendtime:"",
    day:"",
    minutes:"",
    hours:"",
    sendtime:[],
    selected:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrolltime(event){
      console.log(event)
    },
    showSendTime(){
      this.animationsendtime.bottom(0).step()
      this.setData({
        animationsendtime: this.animationsendtime.export()
      })
    },
    hideSendTime(){
      this.animationsendtime.bottom("-1205rpx").step()
      this.setData({
        animationsendtime: this.animationsendtime.export()
      })
    },
    //创建动画
    createanima(){
      var animationsendtime = wx.createAnimation({
        transformOrigin: "50% 50%",
        duration: 500,
        timingFunction: "ease",
        delay: 0
      })
      this.animationsendtime = animationsendtime;
    },

    //生成送出时间
    newtime(){
      let date = new Date();
      let minutes = date.getMinutes();
      let hours = date.getHours();

      let weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      this.setData({
        day: weekday[date.getDate() % 7]
      });
      let sendtime = [
        { "hours": "","minutes":""}
      ];
      let aminutes = 0;
      let ahours = hours;
      if (minutes <= 15) {
        aminutes = 15;
      } else if (minutes <= 30) {
        aminutes = 30;
      } else if (minutes <= 45) {
        aminutes = 45;
      } else {
        aminutes = 0;
        ahours += 1;
      }
      for (let i = 0; i < 6; i++) {
        let om = (i * 15 + aminutes) % 60;
        let tmpobj = {};
        if (om == 0) {
          ahours = ahours <= 22 ? ahours + 1 : "00";
          om = "00";
        }
       
        if (ahours != hours || om != minutes) {
          tmpobj["hours"] = ahours;
          tmpobj["minutes"] = om;
          sendtime.push(tmpobj);
        }
      }
      this.setData({
        sendtime,
        minutes,
        hours
      })
    },

    _selectTime(ev){
   
      this.triggerEvent("selectTime",ev.currentTarget.dataset.sendtime)

      this.setData({
        selected: ev.currentTarget.dataset.index
      })

      this.hideSendTime()
    },
  
  },
  created(){
    console.log("created")
  },
  attached() {
    console.log("attached")
  },

  ready() {
    this.createanima();
    this.newtime();
  },


})
