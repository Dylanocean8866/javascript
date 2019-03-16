// components/nineimg/cmp.js
const beh = require("../behavior/my-behavior")
Component({
  behaviors:[beh],
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr:Array,
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr:[
      "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3970994138,233406537&fm=173&app=49&f=JPEG?w=218&h=146&s=1F24D7055AEA312C468F9CC3030060BB",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3970994138,233406537&fm=173&app=49&f=JPEG?w=218&h=146&s=1F24D7055AEA312C468F9CC3030060BB",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3970994138,233406537&fm=173&app=49&f=JPEG?w=218&h=146&s=1F24D7055AEA312C468F9CC3030060BB",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3970994138,233406537&fm=173&app=49&f=JPEG?w=218&h=146&s=1F24D7055AEA312C468F9CC3030060BB",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010",
      "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=251854237,1698329767&fm=173&app=25&f=JPG?w=218&h=146&s=CDD400C6C2C614F6F12071BA03008010"
    ]
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    showImg:function(e){
      var index = e.currentTarget.dataset.index;
      console.log(index);
      wx.previewImage({
        urls:this.data.imgArr,
        current:this.data.imgArr[index]
      })
    }
  }
})
