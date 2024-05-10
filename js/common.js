//cookie 操作
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
//setCookie("name","hayden","s20");
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}

function setCookie(name,value,time){
	var strsec = getsec(time);
	var exp = new Date();
	exp.setTime(exp.getTime() + strsec*1);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+";path=/";
}

function delCookie(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null){
		document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/";
	}	
}

function getsec(str){
	if(str == undefined) str = 'd1';
	var str1=str.substring(1,str.length)*1;
	var str2=str.substring(0,1);
	if (str2=="s"){
		return str1*1000;
	}else if (str2=="h"){
		return str1*60*60*1000;
	}else if (str2=="d"){
		return str1*24*60*60*1000;
	}
}
//cookie 操作 end


function getQueryString(name) {
	var query_string = window.location.search
	if (!query_string) return null; // 如果无参，返回null
	var re = /[?&]?([^=]+)=([^&]*)/g;
	var tokens;
	while (tokens = re.exec(query_string)) {
	  if (decodeURIComponent(tokens[1]) === name) {
		return decodeURIComponent(tokens[2]);
	  }
	}
	return null;
  }

window.onload = function() {
	var lastTouchEnd = 0;
	document.addEventListener('touchstart', function(event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	});
	document.addEventListener('touchend', function(event) {
		var now = (new Date()).getTime();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);
	document.addEventListener('gesturestart', function(event) {
		event.preventDefault();
	});
}