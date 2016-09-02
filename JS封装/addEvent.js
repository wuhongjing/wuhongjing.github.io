// 事件绑定兼容封装
'use strict'
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
	//addEventListener:高级浏览器
		obj.addEventListener(sEv,fn,false);
	}else{
	//attachEvent:兼容低版本IE浏览器
		obj.attachEvent('on'+sEv,fn);
	};
};