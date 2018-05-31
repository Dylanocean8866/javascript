var deShake =  (function(){
    var timer = null;
    return  function(handle,delay){
        clearTimeout(timer);
        timer = setTimeout(function(){
            handle();
        },delay);
    }
})();

