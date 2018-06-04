

document.addEventListener('DOMContentLoaded', function () {

	var content = document.getElementsByClassName('content')[0];
	var search = document.getElementById('search');
	var filterUl = document.getElementsByClassName("filter")[0];
	var person = [
		{ img: 'img-01', name: 'xiaoming', age: 20, sex: 'male' },
		{ img: 'img-02', name: 'huahua', age: 22, sex: 'fmale' },
		{ img: 'img-03', name: 'xiaohua', age: 21, sex: 'male' },
		{ img: 'img-04', name: 'xiaohong', age: 18, sex: 'fmale' },
		{ img: 'img-05', name: 'xiaoli', age: 19, sex: 'male' },
		{ img: 'img-06', name: 'xiaodan', age: 16, sex: 'fmale' },
		{ img: 'img-07', name: 'meimei', age: 21, sex: 'fmale' },
		{ img: 'img-08', name: 'longlong', age: 16, sex: 'fmale' },
		{ img: 'img-08', name: 'longlong', age: 16, sex: 'fmale' },
	];
	
	store.subScribe(function(){
		render(addFn(store.getState(), fit, person));
	});
	
	store.disPatch({type:'value',value:''})
	function render(arr) {
		content.innerHTML = '';
		var arr = arr || null;
		if (arr != null) {
			arr.forEach(function (ele, index) {
				var li = document.createElement('li');
				var str = '\
								 <span>'+ ele.img + '</span><span>' + ele.name + '</span>\
								 <span>'+ ele.age + '</span><span>' + ele.sex + '</span>\
						';
				li.innerHTML = str;
				content.appendChild(li);
			});
		}
	}
<<<<<<< HEAD
	render(person);

	search.oninput = deShake(event,0);
	function event(){
		var self = this;
		console.log(self.value);
	 	state.value = self.value;
		render(addFn(state, fit, person));
=======
	search.oninput = deShake(event,1000);
	function event(){
		store.disPatch({type:'value',value:this.value});
>>>>>>> 43350a605f8ad14719b05bec45c7d43806152665
	}


	filterUl.addEventListener('click', function (e) {
		var event = e || window.event;
		var target = event.target || event.srcElement;
		if (target.tagName == 'LI') {
			store.disPatch({type:'sex',value:target.getAttribute('sex')});
			document.getElementsByClassName('active')[0].className = '';
			target.className = 'active';
		}
	});

	function filterBySex(sex, arr) {
		var sex = sex || '';
		return arr.filter(function (ele, index) {
			if (sex == 'all') {
				return arr;
			} else if (ele.sex == sex) {
				return true;
			}
		})
		return sexArr;
	}
	function filterBysearch(str, arr) {
		var name = str || '';
		return arr.filter(function (ele, index) {
			if (str.trim() == '') {
				return arr;
			} else if (ele.name == str) {
				return true;
			}
		})
	}
	var fit = {
		value: filterBysearch,
		sex: filterBySex
	}
	function addFn(state, fit, arr) {
		var lastArr = arr;
		for (var prop in fit) {
			lastArr = fit[prop](state[prop], lastArr);
		}
		return lastArr;
	}

});