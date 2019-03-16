// components/tagList/cmp.js
Component({
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    markList:Array
  },

  /**
   * 组件的初始数据
   */
  attached(){
    console.log(this.properties.markList)
  },
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
