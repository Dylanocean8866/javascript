function jsModel(){
    var list = [];
	var state = {
		value: '',
		sex: 'all'
	}
    function getState(prop){
        return state[prop];
    }

    function disPatch(obj){
        state[obj.type] = obj.value;
        for(var i = 0; i < list.length -1 ;i++){
            list[i]();
        }
    }

    function subScribe(fun){
        list.push(fun);
    }

    return {
        getState : getState,
        disPatch : disPatch,
        subScribe : subScribe
    }
}
// console.log(jsModel().getState('sex'));