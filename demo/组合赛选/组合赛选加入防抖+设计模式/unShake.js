
var timer = null;
function deShake(handle, delay) {
    console.log(this);
    var self = this;
    var arg = this.arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
        handle();
    }, delay);   
}


function test2(){

}

function  test(){
    
}


function test3(){
    
}