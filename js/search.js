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
var tab = document.getElementsByClassName("h-tab")[0].children[0].children 
var ipt = document.getElementsByClassName("h-ipt")[0].children 
var select = document.getElementsByClassName("h-select")[0];
var span = document.getElementsByClassName("h-select")[0].firstElementChild 
var con = document.getElementById("h-selectcon");  
var content = document.getElementById("h-selectcon").children;    
for(var i=0; i<tab.length; i++) {  
    tab[i].onclick=function() {   
        for(var i=0; i<tab.length; i++) { 
            tab[i].setAttribute("class","") 
            ipt[i].setAttribute("class","h-hide")
        }  
        this.setAttribute("class","h-active")
        if(this.innerHTML=="商品") {
            ipt[0].setAttribute("class","h-show")
        }else if(this.innerHTML=="书名") {
            ipt[1].setAttribute("class","h-show") 
        }else if(this.innerHTML=="拍卖") {
            ipt[2].setAttribute("class","h-show")  
        }else {
            ipt[3].setAttribute("class","h-show")   
        }
    }
} 
select.onclick=function() { 
    con.setAttribute("class","h-selectcon") 
    console.log(con)
}
content[0].onclick=function() {
    span.innerHTML=content[0].innerHTML
    ipt[2].children[0].placeholder="请输入拍品标题"   
    con.setAttribute("class","") 
}
content[1].onclick=function() {
    span.innerHTML=content[1].innerHTML 
    ipt[2].children[0].placeholder="请输入拍主昵称"
    con.setAttribute("class","") 
}