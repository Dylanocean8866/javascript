//JS时间线
// 1.创建Document对象，开始解析web页面，解析HTML元素和他们文本内容添加Element对象和Text节点到文档中，这个阶段document.readyState = 'loading'
// 2.遇到link外部css，创建线程加载，并继续解析文档
// 3.遇到script外部js，并且没有设置async，defer，浏览器加载， 并阻塞，等待js加载完成并执行该脚本，然后继续解析文档
// 4.遇到script外部js，并且设置有async，defer,浏览器创建线程，并继续解析文档，对于async属性的脚本，脚本加载完成后立即执行（异步禁止使用document.write();）
// 5.遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档
// 6.当文档解析完成，document.readyState = 'interactive'
// 7.文档解析完成后，所有设置有defer的脚本会按照顺序执行，(注意与async的不同，但同样禁止使用document.wirte());
// 8.document对象触发DOMContentLoaded事件，这也标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段
// 9.当所有async的脚本加载完成之后， img等加载完成之后，document.readyState = 'complete',window对象触发onload事件
// 10.从此，以异步相应方式处理用户输入，网络事件等。








/*
 *判断对象类型  通过 Object 原型链上的 toString.call()
*/

function  type(target){
	var ret = typeof(target);
	var template = {
		"[object Array]" : "array",
		"[object Object]" : "object",
		"[object Number]" : "number - object",
		"[object Boolean]" : 'boolean -object',
		"[object String]" : "string -object"
	}

	if(target === null){
		return "null";
	}else if(ret== "object"){
		var str = Object.prototype.toString.call(target);
		return  template[str];
	}else{
		return ret;
	}
}



/*
 *  数组去重方法一    Array 原型链增加  remove  和 unique的方法     
 *  效率很低
*/


var  arr = [1,1,1,1,1,2,2,2,2,2,1,1,1];

Array.prototype.remove=function(obj){
    for(var i =0;i <this.length;i++){
        if(i == obj){
            for(var j = i;j <this.length;j++){
                this[j]=this[j+1];
            }
            this.length = this.length-1;
        }
    }
}

Array.prototype.unique = function(){
	for(var a = 0; a < arr.length; a++){
		for(var b = 0; b < arr.length; b++){
			if( arr[a] == arr[b]){
				arr.remove(b);
			}
		}
	}
}


/*
 *数组去重方法二
 *利用对象属性值的方式，判断当前数组中的元素是否在对象中有对应的对象属性值， 如果没有加上， 有就下一个继续判断
*/
var  arr = [1,1,1,1,1,2,2,2,2,2,1,1,1];
Array.prototype.unique = function(){
	var result = [];
	var tem = {};
	var  len = arr.length;
	for(var i = 0; i < len;  i++ ){
		if(!tem[this[i]]){
			tem[this[i]] = 'abc';
			result.push(this[i]);
		}
	}	
	return result;
}






/*
* 对象克隆
*/

var obj = {
	name : 'haiyang',
	age : '22',
	pets : {
		name : 'niuniu',
		wife : {
			name : 'baobao',
			son : ['daqiang','xiaoqiang']
		}
	}
}


var obj1 = {}


function deepClone(origin,target){

	var target = target || {};
	var toStr = Object.prototype.toString;
	var objArr = '[object Array]';

	for(var prop in origin ){

		if(origin.hasOwnProperty(prop)){

			if(typeof(origin[prop]) !=='null' && typeof(origin[prop]) == 'object'){

				if(toStr.call(origin[prop]) == objArr){

					target[prop] = [];
				}else{
					target[prop] = {};
				}

				deepClone(origin[prop],target[prop])

			}else{
				target[prop] = origin[prop];
			}
		}

	}

	return target;

}



/*
*
*模拟jquery的对象点出多个function
*/

var  haiyang = {

	name : 'haiyang',
	diaoyu : function(){
		console.log('diaoyu,cool....');
		return this;
	},
	chihe : function(){
		console.log('chihe,cool');
		return this;
	}
}

haiyang.diaoyu().chihe();



/*
*
* 圣杯模式  继承
*/

function  extend(Target,Origin){

	function F(){}

	F.prototype	= Origin.prototype;

	Target.prototype = new F();

	Target.prototype.constuctor = Target;

	Target.prototype.uber = Origin.prototype;

}
Father.prototype.name = 'haiyang';
function  Father(){}

function  Son(){}

extend(Son,Father);
Son.prototype.sex = 'male';
var  son = new Son();
var  father =  new Father();


/*
*  按下键盘上下左右， 移动元素div     定时器的使用
*/


	function boxGoing(){
		var div = document.createElement('div');
			document.body.appendChild(div);
			div.style.backgroundColor = '#ccc';
			div.style.height ='100px';
			div.style.width = '100px';
			div.style.position = 'absolute';
			div.style.top = '0px';
			div.style.left ='0px';
			// var speed =1;
			// var interval = setInterval(function(){
			// 		div.style.left = parseInt(div.style.left) + speed +'px';
			// 		div.style.top = parseInt(div.style.top) + speed +'px';
			// },120);

			// var btn = document.getElementsByTagName('button')[0];

			// btn.onclick = function(){
			//     clearInterval(interval);
			// 	console.log('x');
			// }


			document.onkeydown = function(e){

				switch(e.which){
					case 38:
					div.style.top = parseInt(div.style.top) - 50 +'px';
					break;
					case 40:
					div.style.top = parseInt(div.style.top) + 50 +'px';
					break;
					case 37:
					div.style.left = parseInt(div.style.left) - 50 +'px';
					break;
					case 39:
					div.style.left = parseInt(div.style.left) + 50 +'px';
					break;
				}
			}

	}

	



/*
*获取指定层级的父元素
*
*/
var i = document.getElementsByTagName('i')[0];
function getElem(elem, n){
	while(elem && n){
		 elem = elem.parentElement;
		 n --; 
	}
	return elem;
}
getElem(i,10);




/*
*  获取元素的子节点   nodeType == 1  是元素节点   3是 文本节点   2 是属性节点   等等
*
*/
var span = document.getElementsByTagName('span')[0];
Element.prototype.myChild = function(){
	var child = this.childNodes;	
	var len = child.length;
	var arr = [];
	for(var i = 0; i < len; i++){
		if(child[i].nodeType == 3){
			arr.push(child[i]);
		}
	}
	return arr;
}


/*
*获取指定位的兄弟节点
*/
var i = document.getElementsByTagName('i')[0];

  function showBesidesSiblingsByNumber(elem,n){

	while(elem && n){
		if(n > 0){
			if(elem.nextElementSibling)
			elem = elem.nextElementSibling;
			else
			for (e = e.nextSibling; e && e.nodeType !=1; e = e.nextSibling);
			n--;
		}else if(n < 0){
			if(elem.previousElementSibling)
		    elem = elem.previousElementSibling;
			else
			for(e = previousSibling; e  && e.nodeType != 1; e = e.previousSibling);
			n++;
		}
	}
	return elem;
}


/*	
	div.insertBefore(Strong,span); 指定插入元素的位置
	document.createTextNode('demo');
	document.createCommon('this is  common');
	document.createElement('div');
	document.body.appendChild(createElement);
	div.removeChild(Element);  父节点removeChild   相当于剪切操作，不是正直的销毁  应用：如果以后还会用， 就剪切出来保存， 
	Element.remove();  元素调用自己的销毁对象， 是真正的销毁，   控制台没有任何返回值  ES5 新方法
	parentNode.replaceChild(p,strong);   替换
	div.innerHTML   改变元素内容，   可以获取元素内容， 也可以写入覆盖元素内容， 不是追加    
	div.innerHTML+='' 这样就可以追加    
	div.innerText   火狐是没有的  火狐用：textContent  但这个属性老版本IE没有 
	div.setAttribute('id','demo');
	div.getAttribute('id');
	
	childNodes 包含元素节点， 文本节点等   firstChild  lastChild   nextSibling  previousSibling
	parentElement  父节点  
 	document 自成一个节点， 不是元素节点
 	children   元素子节点
	childElementCount  = children.length;  元素子节点个数
	firstElementChild    lastElementChild	
	attributes 取出来是属性结合
	hasChildNodes
	domThree  + cssTree  =  randerTree
	reflow  重排  dom节点的删除   添加  
			dom节点的宽高变化， 位置变化  ，display none
			offsetWidth  offsetLeft
	repaint 重绘


	js异步加载  defer = 'defer'; > 里面可以写代码    
	            aysnc = 'aysnc'; > 里面不能写代码   asychronous


	文档解析完成  document.readState = 'intractive'    
	当页面async的脚本 加载完成并执行后， img等加载完成， document.reayState = 'complate'
*/

/*
*给元素设置attribute
*setAttribute  获取node元素  getAttribute();
*/

var all = document.getElementsByTagName('*');
for(var i = 0; i < all.length; i++){
	 all[i].setAttribute('this-name',all[i].nodeName);
}


/*
*给当前元素添加click   通过  Attribute获取自己的属性
*
*/

var div = document.getElementsByTagName('div')[0];
var nos = div.childNodes;
var len = div.childNodes.length;
function  ecTest(){

	for(var i = 0; i < len; i++){
		if(nos[i].nodeType == 1)
		nos[i].setAttribute('this-name',nos[i].nodeName);
		nos[i].onclick = function (){
			console.log(this.getAttribute('this-name'));
		}
	}
}
ecTest();



/*
*动态创建元素及设置属性
*
*/

var div = document.createElement('div');
document.body.appendChild(div);
var span = document.createElement('span');
div.appendChild(span);
// var text1 = document.createTextNode('haha');
// span.appendChild(text1);
span.innerText = 'haha';
span.setAttribute('class','slogan');


/*
*  通过event的target
*
*/
var ul = document.getElementsByTagName('ul')[0];
ul.onmouseover = function(e){

	var event = e || window.event;

	var target = event.target || event.srcElement;

	target.style.backgroundColor = "rgb(255,100," + target.getAttribute('img-data') + ")";

	target.setAttribute('img-data',parseInt(target.getAttribute('img-data')) + 100);
}




/*
*异步按需加载js
*
*/

	function loadJs(url,callback){
	var script = document.createElement('script');
	script.type = 'text/javascript';

	if(script.readState){
	   script.onreadstatechange = function(){
			if(script.readState == 'complete' || script.readState == 'loaded'){
				// callback();
				// eval(callback)();
				obj[callback]();
			}
		}
	}else{
		script.onload = function(){
			// callback();
			// eval(callback)();
			obj[callback]();
		}
	}

	script.src = url;   //这句话一定要放在这里， 因为如果放到上面赋值，demo.js给出去后，页面在判断前已经loading，下面的判断就没有任何实际意义了
	document.head.appendChild(script);

}

//这里将函数引用传进去 因为如果直接写demo.js里面的函数， 这个时候因为demo.js还没有加载，所有不认识test
//loadJs('demo.js',test); 

//这样写成函数引用， 在里面执行， 可以解决
// loadJs('demo.js',function(){
// 	test();
// })

//或者这些字符串在里面用eval(); 执行
// loadJs('demo.js','test');

//获取将demo.js的方法， 写成对象中， 
// var obj = {
// 	test : function(){
// 		console.log('a');
// 	}
// }
loadJs('demo.js','test')



// 这种方法不好， 因为效率不高， onload方法需要等页面所有的东西加载完成之后，reayState 状态从 loading > interactive > complete   才能执行，
window.onload = function (){
	var div = document.getElementsByTagName('div')[0];
	console.log(div);
}

//利用DOMContentLoaded  只需要在DOM TREE 构建完成之后就可以使用
document.addEventListener('DOMContentLoaded',function(){
	var div = document.getElementsByTagName('div')[0];
	console.log(div);

},false)








//选项卡切换
document.addEventListener('DOMContentLoaded', function () {
    var qk = document.getElementsByClassName('qhInner')[0];	
    var qkBox = document.getElementsByClassName('mInfoInner')[0];
    qk.onmouseover = function (e) {
        var event = e || window.event;
        var target = e.target || e.srcElement;
        var qkLi = Array.prototype.slice.call(qk.children);
        var index = qkLi.indexOf(target);
        for (var i = 0; i < qkLi.length; i++) {
            var bol = index == i;
            qkLi[i].className = bol ? 'qhActive' : '';
            qkBox.children[i].className = bol ? 'qhBoxTrue' : 'qhBoxFlase';
        }
    }
}, false)




//封装的getElementsByName()  
//方法一
Document.prototype.getElementsByName = function(){

	var bqArr = document.getElementsByTagName('*');
	var box = [];
	for(var i = 0; i < bqArr.length; i++){
			var classArr = bqArr[i].className.split(' ');
			for(var j = 0; j < classArr.length; j++){
				if(classArr[j] == 'demo'){
					box.push(bqArr[i]);
				}
			}
	}

	return box;

}
//方法二

	Document.prototype.getElementsByName = function(className){

		var allDomArr = Array.prototype.slice.call(document.getElementsByTagName('*'),0);

		var filterArr = [];

		function dealClass(dom){
			var  reg = /\s+/g;
			var arrClassName = dom.className.replace(reg,'').trim();
			return arrClassName;
		}

		allDomArr.forEach(function(ele,index){

			var itemClassArr = dealClass(ele).split(' ');
			for(var i = 0 ; i <itemClassArr.length; i++){
					if(itemClassArr[i] == className){
						filterArr.push(ele);
						break;
					}
			}
		

		})

		return filterArr;
	}



/*计算滚动条滚动的距离X：Y
//  和 IE8以下的浏览器  
// document.body.scrollLeft/Top
// document.documentElement.scrollLeft/Top  
// 因为兼容为题， 所以一般求取这是把上面的两个值相加
*/
function getScrollOffset(){
	if(window.pageXOffset){
		return {
			x : window.pageXOffset,
			y : window.pageYOffset
		}
	}else{
		return {
			x : document.body.scrollLeft + document.documentElement.scrollLeft,
			y : document.body.scrollTop + document.documentElement.scrollTop
		}
	}
}



// 获取浏览器视窗的大小 这里涉及到向后兼容的问题， 利用compatMode 判断浏览器是正常模式， 还是怪异模式（兼容低版本浏览器） 
function getViewportOffset(){
	if(window.innerWidth){
		return {
			w : window.innerWidth,
			h : window.innerHeight
		}
	}else{
		if(document.compatMode == 'BackCompat'){
			return {
				w : document.body.clientWidth,
				h : document.body.clientHeight
			}
		}else{
			return {
				w : document.documentElement.clientWidth,
				y : document.documentElement.clientHeight
			}
		}
	}
}


/*
	获取计算样式
	window.getComputedStyle(ele,null);
	null   可以填写伪元素比如 after  before
*/
function getStyle(elem,prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(elem,null)[prop];
	}else{
		return elem.currentStyle[prop];
	}
}


/*
	事件绑定
// 解决绑定事件
// 1.如果是直接绑定的， div.onlick = null 可以解除绑定
// 2.通过addEventListener  attachEvent绑定  如下解除
// div.removeEventListener('onlick',test,false);
// div.detachEvent('on' + type,fn);
*/
var div = doczument.getElementsByTagName('div')[0];
Element.prototype.addEvent = function(state,fun){
	if(this.addEventListener){
		this.addEventListener('' + state,fun,false);

	}else if(this.attachEvent){
		//如果这里不是在原型上变成， 需要用fun.call(ele); 这样this就能被指向到调用的元素
		this.attachEvent('on' + state,fun,false);

	}else{
		this['on' + type] = fun;
	}
}

function test(){
	alert(this);
}

div.addEvent('click',test);



// 取消冒泡
function stopBubble(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancleBubble = true;
	}
}
document.onclick = function(){
	console.log('b');
}
div.onclick = function(e){
	stopBubble(e);
	console.log('a');
}


//按照需要加载js
function loadScript(url, callback){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	// 	// IE有自己独有的onreadystate 在script上面， 默认状态是loading 根据script加载的进度， 如果标签加载完，状态修改
	// 	// 完之后， 状态变更为complete 或者loaded
	if(script.readState){
		script.onreadstatechange = function(){
			if(script.readState == 'complete' || script.readState == 'loaded'){
				// callback != null ? callback() : null;
				// eval(callback);
				tools[callback]();
			}
		}
	}else{
		script.onload = function(){
			// callback != null ? callback() : null;
			// eval(callback);
			tools[callback]();
		}
	}
 	// 方在这里是防止网速够快js已经被加载，再执行就没有意义了
	script.src = url;
	document.head.appendChild(script);
}

//这里注意直接写test在后面是不执行的， 
// loadScript('test.js',function(){
// 	test();
// })

// 也可以通过eval的方式，执行字符串函数
// loadScript('test.js','test()');

//通过对象的方式执行  前提方法是放在对象里面
// loadScript('test.js','test')


// 优化函数
var count = 0;
var cache = [];
function jc(n){
	if(n == 0 || n == 1){
		return 1;
	}
	return  n * jc(n - 1);
}
function memorize(fn){
	var cache = {};
	return function(){
		var key = arguments.length + Array.prototype.join.call(arguments);
		console.log(key);
		if(cache[key]){
			return cache[key];
		}else{
			cache[key] =  fn.apply(this,arguments);
			return cache[key];
		}
	}
}
var newF = memorize(jc);
console.time('fir');
console.log(newF(6));
console.timeEnd('fir');
console.time('se');
console.log(newF(6));
console.timeEnd('se');
console.time('th');
console.log(newF(6));
console.timeEnd('th');



// 防止函数被恶意脚本攻击   节流
var div = document.getElementsByTagName('div')[0];
function throttle(handler,wait){
	var lastTime = 0; 
	return function(e){
		var nowTime = new Date().getTime();
		if(nowTime - lastTime > wait){
			handler.apply(this,arguments);
			lastTime = nowTime;
		}
	}   
}
function buy(e){
	console.log(this,e);
	div.innerText =  parseInt(div.innerText) + 1;
}
div.onclick = throttle(buy,1000);



//输入框防止抖动操作
var oInput = document.getElementById('info');
function ajax(){
	console.log(this.value);
}

function debounce(handler,delay){
	var timer = null;
	return  function(){
		var _sef = this;
		var _arg = this.arguments;
		clearTimeout(timer);
		timer = setTimeout(function(){
				ajax.apply(_sef,_arg);
		},delay);
	}
}
oInput.oninput = debounce(ajax,1000);




/*ajax*/
function myAjax(type,url,str,flag,callback){
	type = type.toUpperCase();
	var xhr = null;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{
		xhr = new ActiveXOject('Microsoft.XMLHttp');
	}
	if(type == 'post'){
		xhr.open(type,url,flag);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(str);
	}else{
		xhr.open(type,''+ url +'?'+ str +'',flag);
		xhr.send();
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				callback(xhr.responseText);
			}
		}
	}
}
// myAjax('post','./getNews.php','name=10',true,showData);
// myAjax('get','./getNews.php','name=11',true,showData)