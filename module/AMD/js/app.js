(function(){
   require.config({
       paths:{
        index:'../module/index',
        demo:'../module/demo',
        jquery:'../lib/jquery'
       }
   })
    define(['index','jquery'],function(m1,$){
        m1.showMsg();
        $('body').css('backgroundColor','red')
    })
}())