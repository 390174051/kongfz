// tab切换
var title=document.getElementsByClassName("b-swiper-list")[1].children;
var detail=document.getElementsByClassName("b-story-list");
for(var i=0; i<title.length; i++) {
    title[i].onclick=function() {
        for(var j=0; j<title.length; j++) {
            title[j].className="";
            detail[j].style.display="none";
            if(this==title[j]) {
                title[j].className="red";
                detail[j].style.display="block";
            }
        }
    }
}
var title1=document.getElementsByClassName("b-swiper-list")[0].children;
var detail1=document.getElementsByClassName("b-container");
for(var i=0; i<title1.length; i++) {
    title1[i].onclick=function() {
        for(var j=0; j<title1.length; j++) {
            title1[j].setAttribute("class","");
            detail1[j].style.display="none";
            if(this==title1[j]) {
                // title1[j].className="red";
                title1[j].setAttribute("class","red")
                detail1[j].style.display="block";
            }
        }
    }
}
// 返回顶部
var retuenTop=document.getElementsByClassName("b-return-top")[0];
window.onscroll=function() {
    var top=window.scrollTop || document.documentElement.scrollTop;
    // console.log(top)
    if(top>370) {
        retuenTop.style.display="block";
    }else {
        retuenTop.style.display="none"
    }
}
retuenTop.onclick=function() {
    $('html').animate({ scrollTop: 0 }, 500);
}





