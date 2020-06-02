(function() {
	function w() {
		var r=document.documentElement;
		var a=r.getBoundingClientRect().width;
		if(a>750) {
			a=750
		}
		rem=a/7.5;
		r.style.fontSize=rem+"px";
	}
	var t;
	w();
	window.addEventListener("resize",function() {
		clearTimeout(t)
		t=setTimeout(w,300);
	},false)
})()
var returntop = document.getElementsByClassName("h-returntop")[0]; 
var bodyScrollHeight;
window.onscroll=function() { 
	bodyScrollHeight =  document.body.scrollTop || document.documentElement.scrollTop; 
	if(bodyScrollHeight > window.innerHeight) {
		returntop.style.display="block"
	} else {
		returntop.style.display="none"
	} 
} 
returntop.onclick=function() { 
	scrollTo(0,0);
}
var back = document.getElementsByClassName("f-back")[0];
var shop = document.getElementsByClassName("f-hander-shop")[0];
back.onclick=function() { 
	window.history.go(-1)
}
var shoping = document.getElementsByClassName("f-shoping")[0];
shoping.onclick=function(){
	window.location.href="a-shopping-car.html";
 	}
 	shop.onclick=function(){
	window.location.href="a-shopping-car.html";
 	}
var unfold = document.getElementsByClassName("f-unfold")[0];
var out = document.getElementsByClassName("f-out")[0];
var more = document.getElementsByClassName("f-hander-more")[0];
var link3 = document.getElementsByClassName("f-link3")[0].children[0];
var num=0
	unfold.onclick=function(){
		num=num+1
		if(num%2==0){
			out.style.display="none"
			num=0
		}else{
			out.style.display="block"
		}
	}
	more.onclick=function(){
		num=num+1
		if(num%2==0){
			out.style.display="none"
			num=0
		}else{
			out.style.display="block"
		}
	}
	link3.onclick=function(){
		num=num+1
		if(num%2==0){
			link3.style.backgroundImage=""
		}else {
			link3.style.backgroundImage="url(./img/f-love-r.png)"
			link3.style.backgroundSize="100%" ;
		}
	}
var hander = document.getElementsByClassName("f-hander")[0];
var offset = document.getElementsByClassName("f-top")[0];
var drop = document.getElementsByClassName("f-drop")[0];
var drops= drop.children;
for(var i = 0; i<drops.length; i++) {
	drops[i].index = i;
	drops[i].onclick = function() {
		this.className = 'f-red';
		var g = arr[this.index].offsetTop;
		window.scrollTo(0,g); 
	}
}
var content = document.getElementsByClassName("f-content")[0];
var comments = document.getElementsByClassName("f-comment")[0];
var detail = document.getElementsByClassName("f-detail-info")[0];
var arr=[content,comments,detail]
window.onscroll = function(){
	var scroll = document.documentElement.scrollTop
	if(scroll>offset.offsetHeight){
		hander.style.display="block"
	}else{
		hander.style.display="none"
	}
		for(var i = 0; i < arr.length; i++) {
		if(scroll >= arr[i].offsetTop) {
			for(var j = 0; j < drops.length; j++) {
				drops[j].className = '';
				}
			drops[i].className = 'f-red';
		}
	}
}
var fff = document.getElementsByClassName("f-")[0];
var site = document.getElementsByClassName("f-site")[0];
var bsite = document.getElementsByClassName("f-site-b")[0];
var citys = 
{"北京市":["东城区","东城区","东城区",], "上海市":["东城区","东城区","东城区",], "天津市":["东城区","东城区","东城区",], "重庆市":["东城区","东城区","东城区",], "安徽省":["东城区","东城区","东城区",], "福建省":["东城区","东城区","东城区",],
 "河南省":["郑州市","周口市","安阳市",], "湖北省":["东城区","东城区","东城区",], "湖南省":["东城区","东城区","东城区",], "吉林省":["东城区","东城区","东城区",], "山东省":["东城区","东城区","东城区",], "四川省":["东城区","东城区","东城区",] }
 var city = document.getElementsByClassName("f-city")[0];
 var areas = document.getElementsByClassName("f-areas")[0];
 var show = document.getElementsByClassName("f-show")[0];
 var f =  document.getElementsByClassName("f-")[0]
site.onclick=function(){
	region.style.display="block"
	fff.style.display="block"
	city.style.display="block"
	show.style.display="block"
	document.body.style.position = 'fixed';
document.body.style.overflow = 'hidden';
	f.style.display="block"
	for(var i in citys) {
		city.innerHTML+="<li>"+i+"</li>";
	}
	var citychicd = document.getElementsByClassName("f-city")[0].children;
	for(var i=0;i<citychicd.length;i++){
		citychicd[i].onclick=function(){
			city.style.display="none"
			areas.firstElementChild.innerHTML=this.innerHTML
			bsite.innerHTML=areas.firstElementChild.innerHTML
			areas.lastElementChild.innerHTML="";
			for(var j = 0; j<citys[this.innerHTML].length; j++) {
				areas.lastElementChild.innerHTML+="<li>"+citys[this.innerHTML][j]+"</li>"
				
			}
			for(var a = 0; a<areas.lastElementChild.children.length; a++) {
				areas.lastElementChild.children[a].onclick=function(){
					areas.lastElementChild.innerHTML=this.innerHTML
					bsite.innerHTML=bsite.innerHTML+areas.lastElementChild.innerHTML
					fff.style.display="none";
					region.style.display="none";
					show.style.display="none"
					f.style.display="none"
					document.body.style.position = '';
					document.body.style.overflow = 'auto';
				}
			}
		}
	}
}




		