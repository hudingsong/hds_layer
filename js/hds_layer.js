(function(window){
	function add_loading(str){
		var body = document.getElementsByTagName("body")[0];
		var str = str?str:"数据加载中";
		add_bg();
		var hds_loading=document.createElement('div');
		hds_loading.className='hds_loading';
		hds_loading.id='hl_loading';
		hds_loading.innerHTML=str;
		body.appendChild(hds_loading);
	};
	function close_loading(){
		var body = document.getElementsByTagName("body")[0];
		var body_bg = document.getElementById('hl_body_bg');		
		var hds_loading = document.getElementById('hl_loading');
		body.removeChild(body_bg);
		body.removeChild(hds_loading);
	};
	function toast(msg,time){
		time = time?time:2000;
		add_bg();
		var body = document.getElementsByTagName("body")[0];
		var hds_toast=document.createElement('div');
		hds_toast.className='hds_toast';
		hds_toast.id='hl_toast';
		hds_toast.innerHTML=msg;
		body.appendChild(hds_toast);
		setTimeout(function (){ 
			close_toast();
		}, time);
	}
	function close_toast(){
		var body = document.getElementsByTagName("body")[0];
		var body_bg = document.getElementById('hl_body_bg');		
		var hl_toast = document.getElementById('hl_toast');
		body.removeChild(body_bg);
		body.removeChild(hl_toast);
	}
	function confirm(title,sm,link_name1,fun,link_name2,fun2){
		add_bg();
		link_name2 = link_name2 ? link_name2 : "取消";
		fun2 = fun2 ? fun2 : close_confirm;
		var body = document.getElementsByTagName("body")[0];
		var hds_confirm=document.createElement('div');
		hds_confirm.className='hds_confirm';
		hds_confirm.id='hl_confirm';
		var confirm_html = "";
		confirm_html += "<h3>"+title+"</h3>";
		confirm_html += "<p>"+sm+"</p>";
		confirm_html += "<div class=\"hds_confirm_btn\">";
		if(fun){		
			confirm_html += "<a href=\"javascript:;\" id=\"hl_link2\" class=\"confirm_link2\">"+link_name1+"</a>";	
		}
		confirm_html += "<a href=\"javascript:;\" id=\"hl_link1\" class=\"confirm_link1\">"+link_name2+"</a>";	
		hds_confirm.innerHTML=confirm_html;
		body.appendChild(hds_confirm);
		document.getElementById('hl_link1').onclick=fun2;
		document.getElementById('hl_link2').onclick=fun;
	}	
	function close_confirm(){
		var body = document.getElementsByTagName("body")[0];
		var body_bg = document.getElementById('hl_body_bg');		
		var hl_confirm = document.getElementById('hl_confirm');
		body.removeChild(body_bg);
		body.removeChild(hl_confirm);
	}

	function s_confirm(title,content,fun){
		add_bg();
		var body = document.getElementsByTagName("body")[0];
		var hds_s_confirm=document.createElement('div');
		hds_s_confirm.className='hds_s_confirm';
		hds_s_confirm.id='hl_s_confirm';
		var s_confirm_html = "";
		s_confirm_html += "<div class=\"s_confirm_title\">";
		s_confirm_html += "<h2>"+title+"</h2>";
		s_confirm_html += "<a href=\"javascript:;\" class=\"close\" id=\"s_confirm_close\"></a>";
		s_confirm_html += "</div>";
		s_confirm_html += "<div class=\"s_confirm_content\">"+content+"</div>";
		s_confirm_html += "<div class=\"s_confirm_btn\">";
		s_confirm_html += "<a href=\"javascript:;\" class=\"cancel\" id=\"s_confirm_cancel\">取消</a>";
		s_confirm_html += "<a href=\"javascript:;\" class=\"confirm\" id=\"s_confirm_confirm\">确认</a>";
		s_confirm_html += "</div>";
		hds_s_confirm.innerHTML=s_confirm_html;
		body.appendChild(hds_s_confirm);
		document.getElementById('s_confirm_close').onclick=close_s_confirm;
		document.getElementById('s_confirm_cancel').onclick=close_s_confirm;
		document.getElementById('s_confirm_confirm').onclick=fun;
	}      
	function close_s_confirm(){
		var body = document.getElementsByTagName("body")[0];
		var body_bg = document.getElementById('hl_body_bg');		
		var hl_s_confirm = document.getElementById('hl_s_confirm');
		body.removeChild(body_bg);
		body.removeChild(hl_s_confirm);
	}
	function add_bg(){
		var body = document.getElementsByTagName("body")[0];
		_height=window.screen.height>document.body.clientHeight?window.screen.height:document.body.clientHeight;
		var body_bg=document.createElement('div');
		body_bg.className='body_bg';
		body_bg.id='hl_body_bg';
		body_bg.style.height=_height+"px";
		body.appendChild(body_bg);
	}
	window.hds_layer = {
		add_bg:add_bg,
		add_loading:add_loading,
		close_loading:close_loading,
		toast:toast,
		confirm:confirm,
		close_confirm:close_confirm,
		s_confirm:s_confirm,
		close_s_confirm:close_s_confirm
	}
})(window);
