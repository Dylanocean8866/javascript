// type/type.js
var request = require('../../utils/request')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var typeId = options.id;
    this.getData(3);
    // request({

    // })
    // wx.request({
    //   url:'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/getArticleTypeTitleInfo/'+3,
    //   success:function(res){
    //     if(res.data.code ==0){
    //       console.log(res.data.data)
    //       _this.setData({
    //        idData:res.data.data,
    //       });
    //     }else{
    //       console.log('fail')
    //       wx.showToast({
    //         title:'没有网络',
    //         icon:'none'
    //       })
    //     }
    //   },
    //   fail:function(){
    //     console.log('fail')
    //     wx.showToast({
    //       title:'没有网络',
    //       icon:'none'
    //     })
    //   }
    // })


    // console.log('load');
    // var that = this;
    // wx.request({
    //   url:"https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/home",
    //   success:function(res){
    //     that.setData({
    //       newData:res.data.recommend,
    //       markType:res.data.markType,
    //       articleList:res.data.articleList`
    //     });
    //     // console.log(res.data.articleList)
    //   }
    // })
  },
  getData:function(typeId){
  
    var _this = this;
    request({
      url:"home",
      success:function(res){
        _this.setData({
          newData:res.recommend,
          markType:res.markType,
          articleList:res.articleList
        });
      },
      fail:function(){

      }
    })
    request({
      url:"getArticleTypeTitleInfo/"+typeId,
      success:function(res){
       _this.setData({
           idData:res.data,
       });
      },
      fail:function(){

      }
    })

  },
  onTap:function(e){
    var arId = e.currentTarget.dataset.articleid;
    wx.navigateTo({
      url:'/page/articleDetail/articleDetail?id='+ arId,
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