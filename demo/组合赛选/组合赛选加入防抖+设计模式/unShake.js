<<<<<<< HEAD

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
=======
function deShake(handle, delay) {
        var timer = null;
        return function(){
            var arg = this.arguments;
            var self = this;
            clearTimeout(timer);
            timer = setTimeout(function () {
                handle.apply(self,arg);
            }, delay);
        }
	}
>>>>>>> 43350a605f8ad14719b05bec45c7d43806152665
