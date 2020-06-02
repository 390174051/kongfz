 //字体
 
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
//显示隐藏
var dot=document.getElementsByClassName("d-dot")[0];
var hidden=document.getElementsByClassName("d-hidden")[0]
hidden.style.display="none"
dot.onclick=function(){
    if(hidden.style.display=="none"){
        hidden.style.display="block"
    }else {
        hidden.style.display="none"
    }
}
//懒加载
var xhr=new XMLHttpRequest()
xhr.onreadystatechange = function() {
    if(xhr.readyState ===4 && xhr.status ===200) {
        var details=JSON.parse(xhr.responseText)
            mui.init();
            createFragment = function(count) {
                var fragment = document.createDocumentFragment();
                var li;
                for (var i = 0; i < count; i++) {
                    li = document.createElement('li');
                    li.className = 'mui-table-view-cell mui-media';
                    li.innerHTML =`
                        <div class="d-stroy" >
                                <a  href="javascript:void(0)">
                                    <img data-lazyload="${details[i].sd_img}"  alt="" onclick='send1(${details[i].book_id})'>
                                    <div class="d-inners" >
                                        <div class="d-desc" onclick='send1(${details[i].book_id})'>${details[i].sd_content}</div>    
                                        <div class="d-footer">
                                            <div class="d-read">
                                                <span></span>${details[i].sd_readNum}阅读
                                            </div>
                                            <div class="d-praise">
                                                <div class="d-num">
                                                    <span><i class="d-add">${details[i].sd_good}</i>人</span>
                                                    <img class="d-show" src="img/d-gray.png" alt="" data-loaded="1">
                                                </div>
                                                <span>不能重复点赞</sapn>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ` ;
                    fragment.appendChild(li);
                }
                return fragment;
            };
        (function($) {
            var list = document.getElementById("list");
            list.appendChild(createFragment(40));
            $(document).imageLazyload({
                placeholder: 'img/d-lazyload.png'
            });
        })(mui);
        //点赞后提示，三秒后消失
        var num=document.getElementsByClassName("d-num");
        for(var i=0; i<num.length; i++){
            num[i].onclick=function(){
                if(this.children[0].style.color=="rgb(158, 16, 14)"){
                    this.nextElementSibling.style.display="block"
                    var that=this
                    setTimeout(function(){
                        that.nextElementSibling.style.display="none"
                    },3000)
                }else{
                    this.children[0].children[0].innerHTML=(Number(this.children[0].children[0].innerHTML)+Number(1))
                    this.children[0].style.color="#9e100e"
                    this.children[1].src="img/d-red.png"
                }
                
            }
        }
    }
   
}
xhr.open('GET',"http://localhost/kongfz/book-list.php",true);
xhr.send()
// 点击跳转到详情
function send1(id){
    window.location.href = 'http://localhost/kongfz/f-particulars.html?id=' + id;
}