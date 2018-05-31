	function getStyle(obj,attr){

		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return window.getComputedStyle(obj,false)[attr];
		}
	}

	// var divs = document.getElementsByTagName('div');
	// var attrArr = {
	// 	width : 200,
	// 	height : 200,
	// 	borderWidth :10,
	// 	opacity : 30
	// }
	// divs[0].onmouseenter = function(){
	// 		startMove(this,attrArr,function(){
 //                startMove(divs[1],attrArr);
	// 		});
	// }

	function startMove(obj,json,callback){
		var speed,
			cur,
			bStop = true;
		obj.timer = setInterval(function(){
			for(attr in json){
				if(attr == 'opacity'){
					cur = parseFloat(getStyle(obj,attr)*100);
				}else{
					cur = parseInt(getStyle(obj,attr));
				}
				speed =(json[attr] - cur) / 7 ;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

				if(attr == 'opacity'){
					obj.style[attr] = (cur + speed) / 100;
				}else{
					obj.style[attr] = cur + speed + 'px';
				}

				if(cur != json[attr]){
					bStop = false;
				}else{
					bStop = true;
				}
			}
			if(bStop){
				clearInterval(obj.timer);
				typeof callback == 'function' ? callback() : '';
			}
		},30);

	}
