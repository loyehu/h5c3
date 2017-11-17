
// 获取元素
var banner = document.querySelector(".banner");

function setBanner(){
	
	var windowWidth = document.documentElement.clientWidth;
	// 通过宽高比计算浏览器宽度变化时候的高度（750 / 150）是自己给的，具体数值，根据图片宽度和高度表示
	banner.style.height = windowWidth / (750 / 150) + "px";
	
}

setBanner();

window.onresize = setBanner;





