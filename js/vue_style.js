var websiteSwitch = new Vue({
	el:".website-switch",
	data:{
		items:[]
	},
	created:function(){
		$.ajax({
			url:"ajax/list1.json",
			type:"GET",
			success:function(result){
				websiteSwitch.items = result.items;
			}
		});
	}
})
			
var nav = new Vue({
	el:".nav",
	data:{
		items: []
	},
	created:function(){
		$.ajax({
			url:"ajax/list2.json",
			type:"GET",
			success:function(result){
				nav.items = result.items;
			}
		});
	}
})

var banner = new Vue({
	el:".banner",
	data:{
		banners:[{url:"img/banner01.jpg",href:""},{url:"img/banner02.jpg",href:""},{url:"img/banner03.jpg",href:""},{url:"img/banner04.jpg",href:""},{url:"img/banner05.jpg",href:""}]
	}
})

var gongGao = new Vue({
	el:".gonggao",
	data:{
		tex:"向右滚动的公司公告向右滚动的公司公告向右滚动的公司公告向右滚动的公司公告向右滚动的公司公告向右滚动的公司公告"
	}
})

var kbxx = new Vue({
	el:".kbxx",
	data:{
		shijian:new Date(),
		lists:[
		{id:1,name:"java1820班",time:"2019-08-20"},
		{id:2,name:"UI1820班",time:"2019-08-22"},
		{id:3,name:"网络营销1819班",time:"2019-06-04"},
		{id:4,name:"PHP1819班",time:"2019-7-10"}
		]
	}
})
var butTime = Vue.component("but-tiems",{
	computed:{
		dhms:function (){
			var bo = true;
			var EndTime = new Date(this.time);
			var NowTime = kbxx.shijian;
       	 	var t =EndTime.getTime() - NowTime.getTime();
        	var d=Math.floor(t/1000/60/60/24);
        	var h=Math.floor(t/1000/60/60%24);
        	var m=Math.floor(t/1000/60%60);
        	var s=Math.floor(t/1000%60);
        	if(d<0){
        		d = h = m = s = "00";
        		bo = false;
        	}
			return [bo,d,h,m,s]
		}
	},
	props: ['name','time'],
	template:'<div name="haha" class="cur"><span class="name">{{name}}</span><span>{{time}}</span><span class="status" v-if="dhms[0]">火热报名中</span><span class="baoman" v-else>爆满已开班</span><span>距离开班<em>{{dhms[1]}}</em>天<em>{{dhms[2]}}</em>时<em>{{dhms[3]}}</em>分<em>{{dhms[4]}}</em>秒</span><a>在线报名</a></div>'
})
new Vue({ el: '.kbxx' });
setInterval(function(){
	kbxx.shijian = new Date();
},1000);
