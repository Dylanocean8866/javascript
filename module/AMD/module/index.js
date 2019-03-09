define(['demo'],function(m2){
    var msg = 'index';
    function showMsg(){
        console.log(msg,m2.getName())
    }
    return {showMsg};
})