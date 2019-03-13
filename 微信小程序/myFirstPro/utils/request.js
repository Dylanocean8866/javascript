
// obj={
//     url:'',
//     success:function(){

//     },
//     error:function(){

//     }
// }
var baseUrl = "https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/";

function request(parm){
    console.log(baseUrl + parm.url)
    wx.request({
        url:baseUrl + parm.url,
        success:function(res){
            parm.success(res.data);
            // if(res.data.code == 0){
            //     parm.success(res.data);
            // }else{
            //     show();
            // }
        },
        fail:function(){
            // parm.error()
            show();
        }
    })
}

function show(){
    wx.showToast({
        title:'没有网络',
        icon:'none'
      })
}
module.exports = request;