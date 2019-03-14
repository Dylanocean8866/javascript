// page/articleDetail/articleDetail.js
var request = require('../../utils/request.js')
var audio = wx.getBackgroundAudioManager();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    getAudioOriginFlag:false,
    audioCicleOriginX:0,
    audioCicleMove:0,
    progressWidth:430,
    progressPercentLeft:0,
    progressPercent:0,
    audioCurrentTime:0,
    isCover:false,
    isPlay:true,
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
  circleTs:function(e){
    var audioCicleOriginX = e.touches[0].pageX * this.getPhoneRadio();
    if(!this.data.getAudioOriginFlag){
      this.setData({
        audioCicleOriginX:audioCicleOriginX,
        getAudioOriginFlag:true
      })
    }

  },
  circleTm:function(e){
    var audioCicleMove = e.touches[0].pageX * this.getPhoneRadio();
    var audioCicleOriginX = this.data.audioCicleOriginX;
    var progressCircleLeft = audioCicleMove -audioCicleOriginX;
    if(progressCircleLeft<=0){
      progressCircleLeft = 0 
    }else if(progressCircleLeft>= this.data.progressWidth){
      progressCircleLeft = this.data.progressWidth;
    }
    var progressPercent = progressCircleLeft / this.data.progressWidth * 100;
    var audioCurTime = (progressCircleLeft / this.data.progressWidth * this.data.articleData.audio.duration).toFixed();
    this.audioPlay();
    audio.seek(Number(audioCurTime));
    this.setData({
      audioCicleMove:audioCicleMove,
      progressPercentLeft:progressCircleLeft,
      progressPercent:progressPercent,
     audioCurrentTime:audioCurTime
    })
  },
  getPhoneRadio:function(){
    var radio = 0 ;
    wx.getSystemInfo({
      success:function(res){
        var width = res.screenWidth;
        radio =750 / width;
      }
    })

    return radio;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      var id = options.id;
      this.getData(id);
      // var audio = wx.createInnerAudioContext();
      // audio.src= "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46";
      // audio.autoplay = true;

  },
  listenAudio:function(audio){
    var that = this;
    audio.onPause(function(){
      that.setData({
        isPlay:false
      })
    })
    audio.onStop(function(){
      that.setData({
        isPlay:false,
        progressPercent:0,
        progressPercentLeft:0
      })
    })
    audio.onEnded(function(){
      that.setData({
        isPlay:false
      })
    })
    audio.onPlay(function(){
      that.setData({
        isPlay:true
      })
    })
  },
  updateAudioData:function(audio){
    var audioDuration = this.data.articleData.audio.duration;
    var that = this;
    audio.onTimeUpdate(function(){  
      var audioCurTime = audio.currentTime.toFixed();
      var progressCircleLeft = that.data.progressPercent/100 * that.data.progressWidth;
       that.setData({
         audioCurrentTime:audioCurTime,
         progressPercent:that.data.audioCurrentTime/audioDuration * 100,
         progressPercentLeft:progressCircleLeft
       })
    })

  },
  audioPlay:function(){
    audio.src= "http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46";
    audio.title = 'title'
    this.listenAudio(audio);
    this.updateAudioData(audio);
  },
  playMusicBtn:function(){
      var audio = wx.getBackgroundAudioManager();
      var playing = this.data.playing;

      if(playing){
        audio.pause();
      }else{
        this.audioPlay();
      }
       this.setData({
        isPlay:!playing
      })

  },
  getData:function(aid){
    var _this = this;
      request({
        url:'getArticleDetail/'+aid,
        success:function(res){
          _this.setData({
            articleData:res.data
          })
          console.log('a',_this.data.articleData);
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