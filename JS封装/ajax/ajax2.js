'use strict'
//兼容版本ajax
function json2url(json){
	var arr=[];
	for(var i in json){
		arr.push(i+'='+encodeURIComponent(json[i]));
	}
	return arr.join('&');
}
function ajax(json){
	//json:url,data,type,fnSucc,fnFaild
	json=json||{};
	if(!json.url)return;
	json.data=json.data||{};
	json.type=json.type||'get';
	json.data.t=Math.random();
	
	//新建ajax
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');	
	}
	
	switch(json.type.toLowerCase()){
		case 'get':
		//建立连接
		oAjax.open('GET',json.url+'?'+json2url(json.data),true);
	
		//发送数据
		oAjax.send();
		break;
		
		case 'post':
		oAjax.open('POST',json.url,true);
		oAjax.setRequestHeader('content-type','application/x-www-from-urlencoded');
		oAjax.send(json2url(json.data));
		break;
		
		default:
		oAjax.open('GET',json.url+'?t='+json2url(json.data),true);
		oAjax.send();
		break;
	}
	
	//接收数据
	oAjax.onreadystatechange=function(){
		
		if(oAjax.readyState==4){
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
				json.fnSucc&&json.fnSucc(oAjax.responseText);
			}else{
				json.fnFaild&&json.fnFaild();
			}
		};
	};
};