// 字体
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
//下拉刷新
mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        down: {
            style:'circle',
            callback: pulldownRefresh
        },
    }
});  
function pullupRefresh() {
    setTimeout(function() {
    }, 1000);
} 
function pulldownRefresh() {
    setTimeout(function() {
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh();
    }, 1000);
}
//切换 
$(function(){
   $(".d-list").on("tap",function(){
       $(".d-container").css("display","none")
       $(".d-content").css("display","block")
   })
   $(".d-img").on("tap",function(){
       $(".d-container").css("display","block")
       $(".d-content").css("display","none")
   })
   $(".d-mine").on("tap",function(){
       $(".d-list").css("display","none")
       $(".d-line2").css("display","block")
       $(".d-recently").css("color","#262626")
       $(".d-line1").css("display","none")
       $(this).css("color","#9e100e")
   })
   $(".d-recently").on("tap",function(){
       $(".d-list").css("display","block")
       $(".d-line2").css("display","none")
       $(".d-mine").css("color","#262626")
       $(".d-line1").css("display","block")
       $(this).css("color","#9e100e")
   })
   $(".d-cover").on("tap",function(){
    if($(".d-mine").css("color")=="rgb(158, 16, 14)"){
          $(".d-recently").css("color","rgb(158, 16, 14)")
            $(".d-list").css("display","block")
            $(".d-line1").css("display","block")
            $(".d-mine").css("color","#262626")
            $(".d-line2").css("display","none")
        }else {
            $(this).attr("href","mine.html")
        }
   })
}) 
//点击隐藏出现

// var img=document.getElementsByClassName("d-img")[0];
// var mine=document.getElementsByClassName("d-mine")[0];
// var recently=document.getElementsByClassName("d-recently")[0];
// var line1=document.getElementsByClassName("")
// img.onclick=function(){
//     console.log(mine.style.color)
//     if(mine.style.color="rgb(158, 16, 14)"){
//         recently.style.color="rgb(158, 16, 14)"
//     }
// }