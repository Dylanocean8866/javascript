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