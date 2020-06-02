(function() {
         function w() {
             var r=document.documentElement;
             var a=r.getBoundingClientRect().width;
             if(a<360) {
                 a=320
             }else if(a<=414){
                 a=360
             }else if(a<=750){
                 a=414
             }else{
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
// 键入input底部边框变色
var input=document.getElementsByClassName("e-inputs");
var ipt=document.getElementById("ipt");
for(var i=0;i<input.length;i++){
    input[i].onfocus=function(){
        this.style.borderColor="#262626";
    }
    input[i].onblur=function(){
        this.style.borderColor="#EAEAEA"
    }
}
//找回方式tab切换
var finds=document.getElementsByClassName("e-finds");
var tab=document.getElementsByClassName("e-tab")[0];
var tabinput=document.getElementsByClassName("e-showinput")[0];
var arr1=['手机号','邮箱','用户名'];
var arr2=['请输入您绑定的手机号','请输入您绑定的邮箱','请输入您绑定的用户名']
for(var i=0; i<finds.length; i++){
    (function(k){
        finds[k].ontouchstart=function(){
            tab.innerHTML=arr1[k];
            tabinput.placeholder=arr2[k]
            for(var j=0;j<3;j++){
                finds[j].childNodes[0].classList.remove("e-active")
                this.childNodes[0].classList.add("e-active");  
            }   
        }
    })(i)
}
    
