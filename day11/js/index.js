
// 获取元素
var oImg = document.querySelector(".oImg");
var navItem = document.querySelector(".nav-item");
var navList = document.querySelector(".nav-list");

// 函数调用
setHeight();

// 浏览器宽度改变时调用函数
window.onresize = setHeight;

var windowWidth;
// 高度改变函数
function setHeight(){
	// 获取屏幕宽度
	windowWidth = document.documentElement.clientWidth;
	console.log(windowWidth)
	if( (windowWidth / (1100 /500 )) <= 300){
		oImg.style.height = "300";
		oImg.style.width = "auto";
		return ;
	}
	// 改变高度
	oImg.style.height = windowWidth / (1100 / 500) + "px";
	
}







