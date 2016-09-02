'use strict'
//简单版本ajax
function ajax(url,fnSucc,fnFaild){
	
	//新建ajax
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft.XMLHTTP');	
	}
	
	//建立连接
	oAjax.open('GET',url,true);
	
	//发送数据
	oAjax.send();
	
	//接收数据
	oAjax.onreadystatechange=function(){
		
		if(oAjax.readyState==4){
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
				fnSucc&&fnSucc(oAjax.responseText);
			}else{
				fnFaild&&fnFaild();
			}
		};
	};
};