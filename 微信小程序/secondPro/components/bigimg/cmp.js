// components/bigimg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // imgSrc:{
    //   type:String,
    //   value:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2735633715,2749454924&fm=27&gp=0.jpg",
    //   observer:function(newVal,oldVal,changePath){
    //     console.log(newVal,oldVal,changePath)
    //   }
    // },
    // mainTitle:{
    //   type:'string',
    //   value:'测试测试',
    //   observer:function(){
    //     console.log(newVal,oldVal,changePath)
    //   }
    // }
    imgSrc:String,
    mainTitle:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    src:'',
    title:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
