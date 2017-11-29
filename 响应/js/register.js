
$(function(){
	
	$('input[name="username"]').blur(function(){
		
		var username = $(this).val();
		console.log(username);
		// 验证用户名是否占用
		$.ajax({
			"url": "http://h6.duchengjiu.top/shop/api_user.php",
			"type": "POST",
			"data": {
				"status": "check",
				"username": username
			},
			"success": function(response){
				console.log(response);
				if(response.code === 1){
					$(".success").show();
					$(".error").hide();	
					$(".warn").hide();	
				}else if(response.code === 2001){
					$(".success").hide();
					$(".error").show();	
					$(".warn").hide();	
				}else if(response.code === 1000){
					$(".warn").show();
					$(".error").hide();	
					$(".success").hide();
				}
			}
			
			
			
		});	
	});
	
	
	
	
	
	
	
	
	
	
});
