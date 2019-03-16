// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag:String,
    tagId:Number
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
    linkTo(){
      // const tagId =  this.properties.tagId;
      // wx.navigateTo({
      //   url:`/pages/type/type?tagId=${tagId}` 
      // })
      this._showMsg();
    },
    _showMsg(){
      wx.showToast({
        title:"this is test ",
        icon:"none",
        duration:1000,
        mask:true,
      })
    }
  }
})
