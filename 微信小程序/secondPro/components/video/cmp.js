// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:String,
    poster:String,
    duration:String,
    mainTitle:String,
    vid:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowVideo:true
  },
  lifetimes:{
    attached:function(){
      this._getVideoInfo();
    },
  },

  // created(){
  //   this._getVideoInfo();
  // },
  /**
   * 组件的方法列表
   */
  methods: {
    playVideo:function(){
      this._toggleVideoPoster();
      this.video.play();
    },
    onMask:function(){
      this._toggleVideoPoster();
      this.video.seek(0);
      this.video.stop();
    },
    onbindStop:function(){
      this._toggleVideoPoster();
    },
    _toggleVideoPoster:function(){
      this.setData({
        isShowVideo:!this.data.isShowVideo
      })
    },
    _getVideoInfo:function(){
      let vid = this.properties.vid;
      this.video = wx.createVideoContext(vid,this);
    }
  }
})
