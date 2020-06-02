  // 字体自适应
  (function () {
    function w() {
        var r = document.documentElement;
        console.log(r)
        var a = r.getBoundingClientRect().width;
        console.log(a)
        if (a > 750) {
            a = 750
        }
        rem = a / 7.5
        r.style.fontSize = rem + "px";
    }
    var t;
    w()
    window.addEventListener("resize", function () {
        clearTimeout(t)
        t = setTimeout(w, 300)
    }, false)
})()
function send1(id){
    window.location.href = 'http://localhost/kongfz/f-particulars.html?id=' + id;
}
var ul=document.getElementsByClassName(" c-bookList")[0]
var xhr=new XMLHttpRequest()
xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status===200){
        var data1=JSON.parse(xhr.responseText)
        ul.innerHTML=""
        for(var i=0;i<data1.length;i++){
            ul.innerHTML+=`
                <li class=" c-listItem">
                    <a onclick='send1(${data1[i].book_id})'>
                        <p class="c-img"><img src="${data1[i].swiper_img1}" alt=""></p>
                        <div class="c-con">
                            <h2>${data1[i].book_name}</h2>
                            <h3>
                                地区：${data1[i].area}/
                                品级：${data1[i].book_quality}/
                                上架时间：${data1[i].up_time}
                            </h3>
                            <p class="c-price">
                                <span class="c-fontR">
                                    <small>￥</small>
                                    ${data1[i].book_price}
                                </span>
                                <span class="c-fontG">起</span>
                            </p>
                        </div>
                    </a>
                </li>
            `
        }
    }
}
xhr.open('GET','http://localhost/kongfz/c-recommend.php',true);
xhr.send();
//弹框
mui('.mui-scroll-wrapper').scroll();
mui('body').on('shown', '.mui-popover', function(e) {
});
mui('body').on('hidden', '.mui-popover', function(e) {
});
//返回顶部
var top1=document.getElementsByClassName("c-top1")[0]
var clientHeight=document.documentElement.clientHeight
window.onscroll=function(){
var top=document.documentElement.scrollTop||document.body.scrollTop;
if(top>clientHeight){
    top1.style.display="block";
}else{
    top1.style.display="none";
} 
}
top1.onclick=function(){
    window.scrollTo(0,0)
}