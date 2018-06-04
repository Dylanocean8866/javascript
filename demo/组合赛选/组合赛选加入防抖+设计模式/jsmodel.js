function createStore(state){
    var initState = state;
    var list = [];
    function getState(){
        return state;
    }

    function disPatch(obj){
        state[obj.type] = obj.value;
        list.forEach(function(ele,index){
            ele();
        })
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
var store = createStore({value:'',sex:'all'})