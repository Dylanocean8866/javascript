/*
  	闭包， 函数被保存到外部， 但是拿着他的父级的作用域链条的执行上下文
*/
function demo(){
	var fruit = 'apple';
	var obj = {
		eat : function(){
			if(fruit != ''){
				console.log('I am eating '+ fruit +'');
			}
		},
		push : function(){
			fruit = 'banana';
		}
	}
	return obj;
}
var obj = demo();
obj.push();
obj.eat();


/*
   只要是表达式，加上立即执行函数执行符号  都能执行 + - ！ ()
*/	  
var a = 1,
	  b = 2;
- function (a,b){

console.log(a + b);	  	

}(a,b);



/*
   闭包加立即执行函数,解决闭包问题
*/	  
var arr =[];
function  test(){
	for(var i = 0 ; i < 10; i++ ){
		(function(j){

			arr[i] = function(){
				console.log(j);
			}

		}(i));
	}
}
test();

for(var j = 0; j< arr.length; j++ ){
	arr[j]();
}




/*
   获取index
*/	  
var ulObj = document.getElementsByTagName('ul')[0];
var num = ulObj.children.length;
ulObj.addEventListener('click',function(e){
	var event = e || window.event;
	var target = event.target || event.srcElement;
	var index = Array.prototype.slice.call(ulObj.children).indexOf(target);
	console.log(index);
});



/*闭包方式*/

var ulObj = document.getElementsByTagName('ul')[0];
var num = ulObj.children.length;
var index ;
var arr = [];
for(var i = 0; i < num; i++){
	(function(j){
	   ulObj.children[i].addEventListener('click',function(e){
			for(var b = 0; b < num;  b++){
				ulObj.children[b].style.backgroundColor = '#ccc';
			}
				ulObj.children[j].style.backgroundColor = '#f40';
		});
	}(i));	
}	



/*
 获取字符串的长度
*/
function getStrLength(target){
	var count = target.length;
	for(var i = 0; i < target.length; i++){
		if(target.charCodeAt(i) > 255){
			count++;
		}
	}
	console.log(count);
}




/*
 圣杯模式
*/
Father.prototype.lastName = 'll';
function Father(){}
function Son(){}

var inherit = (function(){
	var F = function F(){}
	return function(Target,Origin){
		F.prototype = Origin.prototype;
		Target.prototype = new F();
		Target.prototype.constructor = Target;
		Target.prototype.uber = Origin.prototype;
	}	
}());

inherit(Son,Father);
var son = new Son();
var father = new Father();