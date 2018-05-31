var deShake =  (function(){
    var timer = null;
    return  function(handle,delay){
        var self = this;
        var arg = this.arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            handle();
        },delay);
    }
})();

