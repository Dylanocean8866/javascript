// page/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:'1',
    likeList:{
      0:true,
      1:false,
      2:true,
      3:false,
      4:true
    },
    homeData:{
      data:"10月7日",
      reTitie:"点评人见闻：似懂非懂发送到发送到萨芬点评人见闻：似懂非懂发送到发送到萨芬",
      reSrc:'/images/1.jpg',

    }
  },
  onLikeTap:function(e){
   var index = e.currentTarget.dataset.articleindex;
   var _this = this;
   wx.getStorage({
     key:"likeList",
     success:function(res){
       _this.data.likeList = res.data;

       _this.data.likeList[index] = !_this.data.likeList[index];
       _this.setData({
         likeList:_this.data.likeList
       })
       wx.setStorage({
        key:"likeList",
        data:_this.data.likeList
      })
   
     }
   })
  },
  ceshi:function(){
    console.log('a');
  },
  childTest:function(e){
    console.log(e,'child')
  },
  parentTest:function(e){
    console.log(e,'parent')
  },
  onArticleTypeTap:function(e){
    var typeId = e.currentTarget.dataset.articletypeid;
    wx.navigateTo({
      url:'/page/type/type?id='+ typeId +''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHomeData();
    var _this = this;   
    wx.getStorage({
      key:'likeList',
      success:function(res){ 
        if(res.data){         
          _this.setData({
            likeList:res.data
          })
        }
      },
      fail:function(){
        wx.setStorage({
          key:"likeList",
          data:_this.data.likeList
        })
      }
    })
    // wx.setStorageSync('name',[1,2,3,4,5,6]);
    // wx.setStorageSync('age','18');
    // wx.removeStorageSync('name')  
    // wx.clearStorageSync()
    // wx.

    // wx.setStorage({
    //   key:'name',
    //   data:'haiyang'
    // });
    // wx.setStorage({
    //   key:'name',
    //   data:'haiyang'
    // })
    // wx.setStorage({
    //   key:"age",
    //   data:'18'
    // })
    // wx.getStorage({
    //   key:'name',
    //   success:function(res){
    //     console.log(res.data);
    //   }
    // })
    // // wx.removeStorage({
    // //   key:"age"
    // // })
    // setTimeout(function(){
    //   wx.clearStorage({})
    // },2000)
    // var _this = this;
    // setTimeout(function(){
    //   _this.data.a = 10;
    //   _this.setData({
    //     a:_this.data.a
    //   })
    // },5000)

    // wx.showActionSheet({
    //   itemList:['a','b'],
    //   itemColor:'#f40',
    //   success:function(res){
    //     console.log(res.tapIndex);
    //   }
    // })
    // wx.showToast({
    //   title:"消息提示框消息提示框消息提示框消息提示框消息提示框消息提示框",
    //   icon:"none",
    //   image:"/images/2.jpg",
    //   duration:3000,
    //   mask:true,
    // });
    // wx.showLoading({
    //   title:'加载中'
    // })

    // setTimeout(function(){
    //     wx.hideLoading({})
    // },2000)
    // wx.showModal({
    //   title:'模态框',
    //   content:'内容',
    //   // showCancel:false,
    //   cancelText:'取消？',
    //   cancelColor:'#f40',
    //   confirmText:"确定吗",
    //   confirmColor:'#f33',
    //   success:function(res){
    //     if(res.confirm){
    //        console.log('success')
    //     }
    //      if(res.cancel){
    //         console.log("fail")
    //      }
    //   },
    //   complete:function(){
    //     console.log('all')
    //   }
    // });
  },
  onMoreTap:function(e){
    var typeStr = e.currentTarget.dataset.articletype;
    wx.showActionSheet({
      itemList:['内容过期了','内容和'+typeStr +'不相关','不再显示来自'+typeStr +'的内容','取消'],
      itemColor:'#f30',
      success:function(res){
        console.log(res.tapIndex)
      }
    })
  },
  getHomeData:function(){
    console.log('load');
    var that = this;
    wx.request({
      url:"https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/home",
      success:function(res){
        that.setData({
          newData:res.data.recommend,
          markType:res.data.markType,
          articleList:res.data.articleList
        });
        // console.log(res.data.articleList)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('ready');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show');
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
      console.log('shuaxin');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('reachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('share')
  }
})