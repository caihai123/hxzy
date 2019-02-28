var a2 = document.getElementsByClassName("a1")[0];
var web = document.getElementsByClassName("website-switch")[0]
a2.onclick = function(){
	var dis = web.style.display;			
	if(dis == "none"){
		web.style.display = "block";			
	}else{
		web.style.display = "none";
	}
}
			
var allFilter = document.getElementById("all_filter");
var formDiv = document.getElementsByClassName("form-div")[0];
function biaoDan(){
	allFilter.style.display = "block";
	formDiv.style.display = "block";
}
allFilter.onclick = function(){
	allFilter.style.display = "none";
	formDiv.style.display = "none";
}
		