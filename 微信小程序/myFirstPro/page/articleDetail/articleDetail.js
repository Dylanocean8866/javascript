// page/articleDetail/articleDetail.js
var request = require('../../utils/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCover:false,
    articleData:{},
    danmuList:[
      {
        text:"hay",
        color:"#f40",
        time:10
      }  
    ]
  },
  closeCover:function(){
    this.setData({
      isCover:true
    })
    var myVideo = wx.createVideoContext('myVideo');
    myVideo.play();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var id = options.id;
      this.getData(id);
  },
  getData:function(aid){
    var _this = this;
      request({
        url:'getArticleDetail/'+10,
        success:function(res){
          console.log(res);
          _this.setData({
            articleData:res.data
          })
        },  
        fail:function(){

        }
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