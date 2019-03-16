// components/articleList/cmp.js
import {IndexModel} from  "../../module/index.js"
let indexModel = new IndexModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList:{
      type:Array,
      value:[],
      observer(){
        // console.log("loading");
      }
    },
    more:{
      type:String,
      value:'',
      observer:'loadMore'
    },
    articleId:{
      type:Number,
      value:'',
      observe:'hasMoreData'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    noMareData:false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    loadMore(){
      console.log('more');
      if(this._isLock() || this.data.noMareData){
        return;
      }
      this._loadLock();
      const magazineId = this.properties.articleId;
      const start = this.data.articleList.length;
      indexModel.getArticleList(magazineId,start).then(res=>{
        this._setMoreData(res);
        this._unLoadLock();
      })
    },
    hasMoreData(){
      console.log('hasMoreData');
      this.setData({
        noMoreData:false
      })
    },
    _isLock(){
      return this.data.loading;
    },
    _loadLock(){
  
      this.setData({
        loading:true
      })
    },
    _unLoadLock(){
      this.setData({
        loading:false
      })
    },
    _setMoreData(list){
      const combineList = this.data.articleList.concat(list);
      if(combineList.length === this.data.articleList.length){
        this.setData({
          noMareData:true
        })
        return 
      }
      this.setData({
        articleList:combineList,
      })
    }
  },

})
