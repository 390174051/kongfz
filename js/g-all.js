(function() {
    function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;
        if(a>750){
            a=750
        }
        rem =a/7.5;
        r.style.fontSize=rem +"px";
    }
    var t;
    w();
    window.addEventListener("resize",function(){
        this.clearTimeout(t);
        t=this.setTimeout(w,300)
    },false)
})()
var num=1;
$(".g-all-more").on("singleTap",function(){
    if(num%2==1) {
        $(".g-lay-out").css("display","block")
    }else{
        $(".g-lay-out").css("display","none")
    }
    num+=1
})

$(document).ready(function(){
    $(window).scroll(function(){
        var bodyScrollHeight =  document.body.scrollTop || document.documentElement.scrollTop; 
        for(var i=0;i<$(".g-menuItem").length;i++){
            if(bodyScrollHeight<288){
                $(".g-menuItem").eq(0).addClass("active").siblings().removeClass("active")
            }else if(bodyScrollHeight<1218){
                $(".g-menuItem").eq(1).addClass("active").siblings().removeClass("active")
            }else if(bodyScrollHeight<1542){
                $(".g-menuItem").eq(2).addClass("active").siblings().removeClass("active")
            }else if(bodyScrollHeight>1542){
                $(".g-menuItem").eq(3).addClass("active").siblings().removeClass("active")
            }
        }
    })
    $(".item1").on("click",function(){
        scrollTo(0,0);
    })
    $(".item2").on("click",function(){
        scrollTo(0,288);
    })
    $(".item3").on("click",function(){
        scrollTo(0,1220);
    })
    $(".item4").on("click",function(){
        scrollTo(0,1556);
    })
})
$(".g-back-icon").on("click",function(){
    window.location.href = "index.html"
})
$(".g-all-message").on("click",function(){
    window.location.href = "g-all-message.html"
})
$(".g-all-index").on("click",function(){
    window.location.href = "index.html"
})
$(".g-all-search").on("click",function(){
    window.location.href = "search.html"
})
$(".g-all-car").on("click",function(){
    window.location.href = "a-shopping-car.html"
})
$(".g-line").on("click",function(){
    window.location.href = "g-line.html"
})
$(".g-used").on("click",function(){
    window.location.href = "g-used.html"
})
$(".g-famous").on("click",function(){
    window.location.href = "g-famous.html"
})