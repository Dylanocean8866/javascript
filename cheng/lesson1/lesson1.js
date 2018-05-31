
		// var n = parseInt(window.prompt('input'));
		// // 1 * 2 * 2 * 2
		// var mul = 1;
		// for(var i = 1; i <=n; i++){
		// 	mul *= 2;
		// }
		// console.log(mul);
		// var mul = 1;
		// for(var i = 1; i<=n; i++){
		// 	mul *= i;
		// }
		// console.log(mul);

		// var a = parseInt(window.prompt('input'));
		// var b = parseInt(window.prompt('input'));
		// var c = parseInt(window.prompt('input'));

		// if(a>b){
		// 	if(a>c){
		// 		console.log(a);
		// 	}else{
		// 		console.log(c);
		// 	}
		// }else{
		// 	if(b>c){
		// 		console.log(b);
		// 	}else{
		// 		console.log(c);
		// 	}
		// }
		// function fun(n,o){
		// 	console.log(o);
		// 	return{
		// 		fun: function(m){
		// 			return fun(m,n);
		// 		}
		// 	}
		// }

		// var a = fun(0); 
		// a.fun(1); 
		// a.fun(2);
		// a.fun(3);   
		// var b = fun(0).fun(1).fun(2).fun(3);

		// window.open('','','width=100,height=100px')

		// 因为a是function(m){

		//  return fun(m,0); 
		//     a.fun(1);只传了m为1，
		//     n为上面fun(0)；传过来的0，   
		//     然后a.fun(1)在执行的时候，
		//     执行了console.log(o);，
		//     这个o对应此时的n，也就是0



		// var strArr = ['a','b','c','d','e'];

		// Array.prototype.slice = function(a,b){

		// 	var  arrNew = [];

		// 	for(var i = a; i < b; i++){
		// 		arrNew.push(this[i]);
		// 	}
		// 	return  arrNew;


		// }