// let request = function(url,success,error,method="GET",data={}){
//     const basePath = ""
//     if(method){
//         method ="GET";
//     }
//     if(data){
//         data ={}
//     }
//     wx.request({
//         url:basePath + url,
//         method:"",
//         data:"",
//         success:function(res){
//             success(res);
//         },
//         error:function(res){
//             error(res)
//         }
//     })
// }   

// let request = function(url){
//     const baseUrl = "https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine";
//     const promise = new Promise((res,rej)=>{
//         wx.request({
//             url:baseUrl + url,
//             success(result){
//                 res(result);
//             },
//             error(e){
//                 rej(e);
//             }
//         })
//     })
//     return promise;
// }
// module.exports = request

class Request{
    constructor(){
        this.baseUrl = "https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine";
    }
    getData(url,method="GET",data={}){
        return new Promise((resolve,rej)=>{
            wx.request({
                url:this.baseUrl + url,
                method:method,
                data:data,
                success:res=>{
                    if(res.data.code == 0){
                        resolve(res.data.data);
                    }else{
                        this._showError();
                    }
                },
                fail:err=>{
                    rej();
                    this._showError();
                }
            })
        })
    }
    _showError(){
        wx.showToast({
            title:'请求错误',
            icon:'none'
        })
    }
}

export {Request}