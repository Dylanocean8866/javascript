
function deShake(handle, delay) {
    var timer = null;
    return function(){
        clearTimeout(timer);
        var arg = this.arguments;
        var self = this;
        console.log(arg);
        timer = setTimeout(function () {
            handle.apply(self,arg);
        }, delay);   
    }
}
