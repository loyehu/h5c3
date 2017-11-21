

$(function(){
	
	// 分类商品数据获取
	$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(response){
//		console.log(response);
		var obj = response;
		for(var i = 0; i < obj.data.length; i++){
			$("#nav").append('<li><a href="list.html?cat_id='+obj.data[i].cat_id+'">' + obj.data[i].cat_name + '</a></li>');
		}
	});
	
	//通过url内容，得到分类id，查询分类商品，并展示到页面中
	var str = location.search.substr(1);
//	console.log(str);
	var catId = str.split("=");
	// 分类商品获取
	$.ajax({
		"url": "http://h6.duchengjiu.top/shop/api_goods.php",
		"type": "get",
		"data": {"cat_id": catId[1]},
		"dataType": "json",
		"success": function(response){
			var obj = response;
			for(var i = 0; i < obj.data.length; i++){
				var html = "";
				html += "<li><a href='detail.html?goods_id="+obj.data[i].goods_id+"'>";
				html += "<img src='"+obj.data[i].goods_thumb+"'></a>";
				html += "<p><a href='detail.html?goods_id="+obj.data[i].goods_id+"'>"+obj.data[i].goods_name +"</a></p>";
				html += "<p>"+obj.data[i].goods_desc +"</p>"
				html += "<p>￥"+obj.data[i].price+"</p>"
				$("#goodsList").append(html);
			}
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});