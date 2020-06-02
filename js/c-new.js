    // 字体自适应
    (function () {
        function w() {
            var r = document.documentElement;
            var a = r.getBoundingClientRect().width;
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
  //最近出版获取数据
     var tit2=document.getElementsByClassName("c-tit2")[0]
     var change1=document.getElementsByClassName("c-change1")[0]
     var re=document.getElementsByClassName("c-re")[0]
     var sale=document.getElementsByClassName("c-bookSale")[0]
     var change2=document.getElementsByClassName("c-change2")[0]
     var newBook=document.getElementsByClassName("c-newBook")[0]
     change1.onclick=function(){
        changeA()
     }
     change2.onclick=function(){
        changeB()
     }
     function send1(id){
        window.location.href = 'http://localhost/kongfz/f-particulars.html?id=' + id;
    }
     var xhr=new XMLHttpRequest()
     xhr.onreadystatechange=function(){
         if(xhr.readyState===4 && xhr.status===200){
            var data1=JSON.parse(xhr.responseText)
             //近期出版
            changeA=function(){
                tit2.innerHTML=""
                num=Math.floor(Math.random()*data1.length)
                if(num>(data1.length-3)&&num<data1.length){
                    num=num-3
                }
                for(var i=num ;i<num+3;i++){
                    tit2.innerHTML+=`
                        <li class="mui-table-view-cell c-out" >
                            <a onclick='send1(${data1[i].book_id})'>
                                <div class="c-left">
                                    <img src="${data1[i].swiper_img1}" alt="">
                                    <p><span>￥</span><span>${JSON.parse(data1[i].book_price)}</span><span>起</span></p>
                                </div>
                                <div class="c-right">
                                    <div class="c-one">${data1[i].book_name}</div>
                                    <div class="c-two">
                                    地区：${data1[i].area}/
                                    库存：${data1[i].stock}/
                                    品级：${data1[i].book_quality}/
                                    上架时间：${data1[i].up_time}
                                    </div>
                                    <div class="c-three">◎《零年》回顾了作为二战尾声的1945年世界局势所发生的变化。一个世界走到了尽头，另一个焕然一新且前</div>
                                </div>
                            </a>
                        </li>
                    `
                }
            }
            changeA()
             //孔夫子新书广场
            for(var i=10;i<13;i++){
                newBook.innerHTML+=`
                    <li class="mui-table-view-cell c-out" >
                        <a  onclick='send1(${data1[i].book_id})'>
                            <div class="c-left">
                                <img src="${data1[i].swiper_img1}" alt="">
                                <p><span>￥</span><span>${JSON.parse(data1[i].book_price)}</span><span>起</span></p>
                            </div>
                            <div class="c-right">
                                <div class="c-one">${data1[i].book_name}</div>
                                <div class="c-two"></div>
                                <div class="c-logo">
                                    <span>限量
                                        <div class="c-rect"><p class="c-angle"></p></div>
                                    </span>
                                    <span>签名
                                        <div class="c-rect"><p class="c-angle"></p></div>
                                    </span>
                                    <span>毛边本
                                        <div class="c-rect"><p class="c-angle"></p></div>
                                    </span>
                                    <span>钤印
                                        <div class="c-rect"><p class="c-angle"></p></div>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </li>
                    `
            }
             //新书销售排行榜
             changeB=function(){
                sale.innerHTML=""
                num=Math.floor(Math.random()*data1.length)
                if(num>(data1.length-3)&&num<data1.length){
                    num=num-3
                }
                for(var i=num ;i<num+3;i++){
                    sale.innerHTML+=`
                        <li class="mui-table-view-cell c-out" >
                            <a onclick='send1(${data1[i].book_id})'>
                                <div class="c-left">
                                    <img src="${data1[i].swiper_img1}" alt="">
                                    <p><span>￥</span><span>${JSON.parse(data1[i].book_price)}</span><span>起</span></p>
                                </div>
                                <div class="c-right">
                                    <div class="c-one">${data1[i].book_name}</div>
                                    <div class="c-two">
                                    地区：${data1[i].area}/
                                    库存：${data1[i].stock}/
                                    品级：${data1[i].book_quality}/
                                    上架时间：${data1[i].up_time}
                                    </div>
                                    <div class="c-three">为什么我们记得过去，而非未来？时间“流逝”意味着什么？是我们存在于时间之内，还是时间存在于我们之中？</div>
                                </div>
                            </a>
                        </li>
                    `
                }
             }
             changeB()
             //为您推荐
            for(var i=0;i<data1.length-60;i++){
                re.innerHTML+=`
                    <li class="mui-table-view-cell c-reList" >
                        <a onclick='send1(${data1[i].book_id})'>
                            <div class="c-reImg">
                                <img src="${data1[i].swiper_img1}" alt="">
                            </div>
                            <div class="c-reTit">${data1[i].book_name}</div>
                            <div class="c-reLogo">
                                <span>${data1[i].book_quality}</span>
                                <span>${data1[i].area.slice(0,2)}</span>
                            </div>
                            <div class="c-rePrice">
                                <span>￥</span>
                                <span>${data1[i].book_price}</span>
                            </div>
                        </a>
                    </li>
                    `
            }
        }
    }
     xhr.open('GET','http://localhost/kongfz/c-recommend.php',true);
     xhr.send();
     mui.init({
        swipeBack: true
    });
    (function($) {
        //弹框
        mui('.mui-scroll-wrapper').scroll();
        mui('body').on('shown', '.mui-popover', function(e) {
        });
        mui('body').on('hidden', '.mui-popover', function(e) {
        });
    })(mui);
    // 轮播图
    new Swiper('.swiper-container', {
        pagination: {
            el: ".swiper-pagination"
        },
        paginationType: "bullets",
        direction: "horizontal",
        loop: true,
        autoplay: true,
    })
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
  