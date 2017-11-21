
$(function(){
	
	// 分类商品数据获取
	$.get("http://h6.duchengjiu.top/shop/api_cat.php",function(response){
		console.log(response);
		var obj = response;
		for(var i = 0; i < obj.data.length; i++){
			$("#nav").append('<li><a href="list.html?cat_id='+obj.data[i].cat_id+'">' + obj.data[i].cat_name + '</a></li>');
		}
	});
	
	// 热门商品获取
	$.ajax({
		"url": "http://h6.duchengjiu.top/shop/api_goods.php",
		"type": "GET",
		"dataType": "JSON",
		"success": function(response){
			var obj = response;
			console.log(obj);
			for(var i = 0; i < obj.data.length; i++){
				var html = `<li>
								<a href="detail.html?goods_id=${obj.data[i].goods_id}">
									<img src="${obj.data[i].goods_thumb}">
								</a>
								<p>
									<a href="detail.html?goods_id=${obj.data[i].goods_id}">${obj.data[i].goods_name}</a>
								</p>
								<p>${obj.data[i].goods_desc}</p>
							</li>`;
				$("#goodList").append(html);
			}
		}
	});
	

	//	搜索
	$("#btn").click(function(){
		var searchContent = $("#search").val();
		console.log(searchContent);
		window.location.href="detail.html?search_text=" + searchContent;
	});
	
	
	
	
	
	
	
	
	
	
	
});
