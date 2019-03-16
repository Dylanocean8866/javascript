// components/more/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataTag:String
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
    showMore(e){
      const tagName=e.currentTarget.dataset.tag;
      console.log(e);
      wx.showActionSheet({
        itemList:['内容已经过期','内容和'+ tagName +'不相关','不在显示来自'+ tagName +'的内容'],
        itemColor:'#f40',
        success(res){
          if(res.tapIndex == 0 || res.tapIndex == 1){
            wx.showToast({
              title:"已提交",
              mask:true,
              duration:1000
            })
          }
        }
      })
    }
  }
})
