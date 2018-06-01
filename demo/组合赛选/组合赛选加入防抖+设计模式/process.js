

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

	// var jsm = new  jsModel();
	
	var state = {
		value: '',
		sex: 'all'
	}
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
	render(person);

	search.oninput = deShake(event,1000);

	function event(){
		render(addFn(state, fit, person));
	}

	filterUl.addEventListener('click', function (e) {
		var event = e || window.event;
		var target = event.target || event.srcElement;
		if (target.tagName == 'LI') {
			state.sex = target.getAttribute('sex');
			render(addFn(state, fit, person));
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
	// var state = {
	// 	value: '',
	// 	sex: 'all'
	// }
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