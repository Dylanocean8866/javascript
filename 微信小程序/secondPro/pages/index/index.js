// pages/index/index.js
import {IndexModel} from "../../module/index.js";
import {mathStr} from "../../utils/randomStr.js";
const indexModel = new IndexModel();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    articleList:[],
    markList:[],
    recommedInfo:[],
    getmore:'',
    aId:0,
    topLoading:true,
    artId:0,
    magazineId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    wx.showLoading();
    setTimeout(function(){
      // wx.hideTabBar({
      //   animation:true
      // })
      // wx.hideTabBarRedDot({
      //   index:0
      // })
    },2000)
    wx.showTabBarRedDot({
      index:0
    })
    wx.setTabBarBadge({
      index:0,
      text:'100'
    })
 
  },
  getData(magazId){
    const articleList =indexModel.getArticleList(magazId);
    const markList =indexModel.getMarkList(magazId);
    const recommedInfo =indexModel.getRecommedInfo(magazId);
    Promise.all([articleList,markList,recommedInfo]).then(res=>{
      this.setData({
        articleList:res[0],
        markList:res[1],
        recommedInfo:res[2]
      })
      wx.hideLoading();
      this._hideTopLoading();
    })
  },
  _hideTopLoading(){
    this.setData({
      topLoading:false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  toLower:function(){
    console.log("lower");
  },
  toUpper:function(){
    console.log('upper')
  },
  onReady: function () {

  },
  gocatalog:function(){
    wx.switchTab({
      url:'/pages/catalog/catalog'
    })
  },
  onNav(e){
    const magazineId = e.detail.index;
    this.setMagazineId(magazineId);
    this.scrollPageTop();
    this.getData(magazineId)
  },
  resetData(){
    this.setData({
      articleList:[],
      markList:[],
      recommedInfo:[]
   })
  },
  scrollPageTop(){
    wx.pageScrollTo({
      scrollTop:0,
      duration:0
    })
  },
  setMagazineId(magazineId){
     this.setData({
        magazineId:magazineId,
     })
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
        this.setData({
          getmore:mathStr(20)
        })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})