
function deShake(handle, delay) {
    var timer = null;
    return function(){
        clearTimeout(timer);
        var arg = this.arguments;
        var self = this;
        timer = setTimeout(function () {
            handle.apply(self,arg);
        }, delay);   
    }
}
