(function(window, $){	
	function add_loading(str){
		str = str?str:"数据加载中";
		add_bg();
		$("body").append("<div class='hds_loading'>" + str +"</div>");
	};
	function close_loading(){
		$(".body_bg").remove();
		$(".hds_loading").remove();
	};
	function toast(msg,time){
		time = time?time:2000;
		add_bg();
		var alert_html = "";
		alert_html += "<div class=\"hds_toast\">"+msg+"</div>";
		$("body").append(alert_html);
		setTimeout(function (){ 
			close_toast();
		}, time);
	}
	function close_toast(){
		$(".body_bg").remove();
		$(".hds_toast").remove();	
	}
	function confirm(title,sm,link_name1,fun,link_name2,fun2){
		add_bg();
		link_name2 = link_name2 ? link_name2 : "取消";
		fun2 = fun2 ? fun2 : close_confirm;
		var confirm_html = "";
		confirm_html += "<div class=\"hds_confirm\">";
		confirm_html += "<h3>"+title+"</h3>";
		confirm_html += "<p>"+sm+"</p>";
		confirm_html += "<div class=\"hds_confirm_btn\">";
		if(fun){		
			confirm_html += "<a href=\"javascript:;\" class=\"confirm_link2\">"+link_name1+"</a>";	
		}
		confirm_html += "<a href=\"javascript:;\" class=\"confirm_link1\">"+link_name2+"</a>";	
		confirm_html += "</div>";
		$("body").append(confirm_html);
		$(".confirm_link2").click(fun);
		$(".confirm_link1").click(fun2);	
	}
	function close_confirm(){
		$(".body_bg").remove();
		$(".hds_confirm").remove();	
	}
	function add_bg(){
		_height=window.screen.height>document.body.clientHeight?window.screen.height:document.body.clientHeight;
		$("body").append("<div class='body_bg' style='height:"+_height+"px'></bg>");
	}
	window.hds_layer = {
		add_loading:add_loading,
		close_loading:close_loading,
		toast:toast,
		confirm:confirm,
		close_confirm:close_confirm
	}
})(window, jQuery);
