//给slick-dots添加li
var container = document.getElementsByClassName("containers")[0];//获取轮播图ul的dom对象
var li = container.getElementsByTagName("li");//获取所有banner的li；
var len = li.length;//计算banner的数量
var slickDots = document.getElementsByClassName("slick-dots")[0];//获取小圆点ul的dom对象
container.style.width = len*100+"%";//设置轮播ul的百分数宽度
var slickHtml = "";
for (var i = 0;i< len;i++) {
	if(i==0){
		slickHtml += "<li class='flase'></li>";
	}else{
		slickHtml += "<li class='true'></li>";
	}
	li[i].style.width = 100/len +"%";
}
slickDots.innerHTML = slickHtml;
//兼容性不好，不支持ie9以下浏览器，因为ie9以下浏览器没有类选择器，ie10以下ie9以上浏览器没有过度效果，因为不支持css3；
var distance = 0;
var time = setTimeout(function(){roll("left");},3000);
//控制ul滚动的方法
	function roll(direction){
		clearTimeout(time);
		if(direction == "left"){
			distance -= 100;
		}else if(direction == "right"){
			distance += 100;
		}else{
			console.log("roll函数实差错误，只能是left或right");
		}
		if(distance > 0 ){
			distance = -len*100+100;
		}else if(distance < -len*100+100){
			distance = 0;
		}
		document.getElementsByClassName("flase")[0].setAttribute("class","true");//将class为flase的元素的class值改为true；
		container.style.left = distance + "%";
		ul_lis[-distance/100].setAttribute("class","flase");
		time = setTimeout(function(){roll("left");},3000);
	}
//点击小圆点切换的方法
	slickDots.onclick = function(e){
		var event = e || window.event;//获取事件对象
		var target = event.target || event.srcElement;//获取事件源对象
		if(target != slickDots){
			clearTimeout(time);
			document.getElementsByClassName("flase")[0].setAttribute("class","true");//将class为flase的元素的class值改为true；
			container.style.left =- target.index *100+ "%";
			target.setAttribute("class","flase");
			time = setTimeout(function(){roll("left");},3000);
		}	
	}
//给slick-dots下的li加上index属性，值为索引	
	var ul_lis=slickDots.getElementsByTagName('li');
    	for (var i = 0;i < ul_lis.length; i++) {
      		ul_lis[i].index = i;
    	}