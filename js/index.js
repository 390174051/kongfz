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



// 轮播图
mui.init({
    swipeBack:true //启用右滑关闭功能
}); 
var slider = mui("#slider"); 
slider.slider({
    interval: 3000
});  
var slider = document.getElementsByClassName("swiper-wrapper"); 
var list = document.getElementsByClassName("h-listItem");
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=function() {
    if(xhr.readyState===4 && xhr.status===200) {
        var content = JSON.parse(xhr.responseText);
        for(var i=67; i<70; i++) {
            list[0].innerHTML+=`
                <li class="h-list" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-listimg">
                            <img src="${content[i].swiper_img1}">
                            <div class="h-listprice">
                                <span>￥${Math.floor(content[i].book_price)}</span> 
                            </div>
                        </div>
                        <div class="h-listtitle">
                            <p>${content[i].book_name}</p>
                        </div>
                    </a>
                </li> 
            `
        }
        var change = document.getElementsByClassName("h-change");
        var num = 70 
        change[0].onclick=function() { 
            num = num+3
            if(num==79) {
                num=70
            }
            list[1].innerHTML="" 
            for(var i=num; i<num+3; i++) {
                list[1].innerHTML+=`
                    <li class="h-list" onclick='send1(${content[i].book_id})'>
                        <a href="#">
                            <div class="h-listimg">
                                <img src="${content[i].swiper_img1}">
                                <div class="h-listprice">
                                    <span>￥${Math.floor(content[i].book_price)}起</span> 
                                </div>
                            </div>
                            <div class="h-listtitle">
                                <p>${content[i].book_name}</p>
                            </div>
                        </a>
                    </li> 
                `
            }
        }
        for(var i=num; i<num+3; i++) {
            list[1].innerHTML+=`
                <li class="h-list" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-listimg">
                            <img src="${content[i].swiper_img1}">
                            <div class="h-listprice">
                                <span>￥${Math.floor(content[i].book_price)}起</span> 
                            </div>
                        </div>
                        <div class="h-listtitle">
                            <p>${content[i].book_name}</p>
                        </div>
                    </a>
                </li> 
            `
        } 
        var num1=15
        change[1].onclick=function() {
            num1=num1+3  
            if(num1==24) {
                num1=15
            }
            list[2].innerHTML="" 
            for(var i=num1; i<num1+3; i++) {
                list[2].innerHTML+=`
                    <li class="h-list" onclick='send1(${content[i].book_id})'>
                        <a href="#">
                            <div class="h-listimg">
                                <img src="${content[i].swiper_img1}">
                                <div class="h-listprice">
                                    <span>￥${Math.floor(content[i].book_price)}起</span> 
                                </div>
                            </div>
                            <div class="h-listtitle">
                                <p>${content[i].book_name}</p>
                            </div>
                        </a>
                    </li> 
                `
            }
        }
        for(var i=num1; i<num1+3; i++) {
            list[2].innerHTML+=`
                <li class="h-list" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-listimg">
                            <img src="${content[i].swiper_img1}">
                            <div class="h-listprice">
                                <span>￥${Math.floor(content[i].book_price)}起</span> 
                            </div>
                        </div>
                        <div class="h-listtitle">
                            <p>${content[i].book_name}</p>
                        </div>
                    </a>
                </li> 
            `
        }
        var num2=0
        change[2].onclick=function() {
            num2=num2+3  
            if(num2==9) {
                num2=0
            }
            list[3].innerHTML="" 
            for(var i=num2; i<num2+3; i++) {
                list[3].innerHTML+=`
                    <li class="h-list" onclick='send1(${content[i].book_id})'>
                        <a href="#">
                            <div class="h-listimg">
                                <img src="${content[i].swiper_img1}">
                                <div class="h-listprice">
                                    <span>￥${Math.floor(content[i].book_price)}起</span> 
                                </div>
                            </div>
                            <div class="h-listtitle">
                                <p>${content[i].book_name}</p>
                            </div>
                        </a>
                    </li> 
                `
            }
        }
        for(var i=num2; i<num2+3; i++) {
            list[3].innerHTML+=`
                <li class="h-list" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-listimg">
                            <img src="${content[i].swiper_img1}">
                            <div class="h-listprice">
                                <span>￥${Math.floor(content[i].book_price)}起</span> 
                            </div>
                        </div>
                        <div class="h-listtitle">
                            <p>${content[i].book_name}</p>
                        </div>
                    </a>
                </li> 
            `
        }
        // 好书推荐
        for(var i=0; i<10; i++) { 
            slider[0].innerHTML+= `
                <div class="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-bookgimg">
                            <img src="${content[i].swiper_img1}">
                        </div>
                        <div class="h-bookdetail">
                            <p class="h-bookname">${content[i].book_name}</p>
                            <p class="h-bookauthor">${content[i].author}</p>
                            <p class="h-bookprice"><span>￥${content[i].book_price}</span>起</p>
                        </div> 
                    </a>
                </div> 
            ` 
        }
        // 书单推荐
        for(var i=10; i<13; i++) { 
            slider[1].innerHTML+= `
                <div class="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-bookgimg">
                            <img src="${content[i].swiper_img1}">
                        </div>
                        <div class="h-bookdetail">
                            <p class="h-bookname">${content[i].book_name}</p>
                            <p class="h-bookauthor">${content[i].author}</p>
                            <p class="h-bookprice"><span>￥${content[i].book_price}</span></p>
                        </div> 
                    </a> 
                </div>  
            ` 
        } 
        // 查看全部书单
        var swi = document.getElementById("swiper"); 
        var div = document.createElement("div"); 
        div.setAttribute("class","swiper-slide")
        div.setAttribute("id","h-all")
        div.innerHTML=`
            <a href="book-list.html">
                <div class="h-slidemore">
                    查看全部137个书单
                </div>
            </a> 
        ` 
        swi.appendChild(div) 
        for(var i=10; i<20; i++) { 
            slider[2].innerHTML+= `
                <div class="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-bookgimg">
                            <img src="${content[i].swiper_img1}">
                        </div>
                        <div class="h-bookdetail">
                            <p class="h-bookname">${content[i].book_name}</p>
                            <p class="h-bookauthor">${content[i].author}</p>
                            <p class="h-bookprice"><span>￥${content[i].book_price}</span></p>
                        </div> 
                    </a>
                </div> 
            ` 
        }
        for(var i=20; i<30; i++) { 
            slider[3].innerHTML+= `
                <div class="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-bookgimg">
                            <img src="${content[i].swiper_img1}">
                        </div>
                        <div class="h-bookdetail">
                            <p class="h-bookname">${content[i].book_name}</p>
                            <p class="h-bookauthor">${content[i].author}</p>
                            <p class="h-bookprice"><span>￥${content[i].book_price}</span></p>
                        </div> 
                    </a>
                </div> 
            ` 
        }
        for(var i=30; i<40; i++) { 
            slider[4].innerHTML+= `
                <div class="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-bookgimg">
                            <img src="${content[i].swiper_img1}">
                        </div>
                        <div class="h-bookdetail">
                            <p class="h-bookname">${content[i].book_name}</p>
                            <p class="h-bookauthor">${content[i].author}</p>
                            <p class="h-bookprice"><span>￥${content[i].book_price}</span></p>
                        </div> 
                    </a>
                </div> 
            ` 
        }
        for(var i=40; i<50; i++) { 
            slider[5].innerHTML+= `
                <div class="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-bookgimg">
                            <img src="${content[i].swiper_img1}">
                        </div>
                        <div class="h-bookdetail">
                            <p class="h-bookname">${content[i].book_name}</p>
                            <p class="h-bookauthor">${content[i].author}</p>
                            <p class="h-bookprice">当前价<span>￥${content[i].book_price}</span></p>
                        </div> 
                    </a>
                </div> 
            ` 
        }
        for(var i=50; i<60; i++) { 
            slider[6].innerHTML+= `
                <div class="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-bookgimg">
                            <img src="${content[i].swiper_img1}">
                        </div>
                        <div class="h-bookdetail">
                            <p class="h-bookname">${content[i].book_name}</p>
                            <p class="h-bookauthor">${content[i].author}</p>
                            <p class="h-bookprice">当前价<span>￥${content[i].book_price}</span></p>
                        </div> 
                    </a>
                </div> 
            ` 
        }
        // 民国期刊拍卖
        for(var i=60; i<70; i++) { 
            slider[7].innerHTML+= `
                <div class="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-bookgimg">
                            <img src="${content[i].swiper_img1}">
                        </div>
                        <div class="h-bookdetail">
                            <p class="h-bookname">${content[i].book_name}</p>
                            <p class="h-bookauthor">${content[i].author}</p>
                            <p class="h-bookprice">当前价<span>￥${content[i].book_price}</span></p>
                        </div> 
                    </a>
                </div> 
            ` 
        } 
        // 艺术品拍卖
        for(var i=71; i<80; i++) { 
            slider[8].innerHTML+= `
                <div class="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-bookgimg">
                            <img src="${content[i].swiper_img1}">
                        </div>
                        <div class="h-bookdetail">
                            <p class="h-bookname">${content[i].book_name}</p> 
                            <p class="h-bookprice">当前价<span>￥${content[i].book_price}</span></p>
                        </div> 
                    </a>
                </div> 
            ` 
        }  
        // 艺术品专场
        for(var i=0; i<4; i++) { 
            slider[9].innerHTML+= `
                <div class="swiper-slide" id="swiper-slide" onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-booktitle">${content[i].book_name}</div>
                        <div class="h-bookgimg" id="h-bookimg">
                            <img src="${content[i].swiper_img1}">
                            <img src="${content[i].swiper_img2}">
                            <img src="${content[i].swiper_img3}">
                        </div> 
                    </a>
                </div> 
            ` 
        } 
        var item = document.getElementById("h-item"); 
        for(var i=0; i<20; i++) {
            item.innerHTML+= `
                <li onclick='send1(${content[i].book_id})'>
                    <a href="#">
                        <div class="h-img-box">
                            <img class="lazy" src="${content[i].swiper_img1}"> 
                        </div>
                        <div class="h-img-tit">${content[i].book_name}</div>
                        <div class="h-middle-box">
                            <span class="h-boxquality">${content[i].book_quality}</span>
                            <span class="h-boxarea">${content[i].area}</span> 
                        </div>
                        <div class="h-listprice1">
                            <span>￥${Math.floor(content[i].book_price)}</span> 
                        </div>
                    </a>
                </li>
            
            `
        } 
        var swiper = new Swiper('.swiper-container', { 
            pagination: '.swiper-pagination',
            slidesPerView: 'auto',
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30 ,
            centeredSlides: false, 
            watchSlidesProgress : true, 
            paginationClickable: true, 
        });  
    }
} 
xhr.open("GET","http://localhost/kongfz/connect.php",true)
xhr.send()
// 点击回顶部
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
//底部固定部分 


var active = document.getElementsByClassName("h-active"); 
for(var i=0; i<active.length; i++) {
    active[i].onclick=function() { 
        for(var i=0; i<active.length; i++) {
            active[i].setAttribute("id","")
        }
        this.setAttribute("id","h-active")
        console.log(11);

    }
}
function send1(id){
    window.location.href = 'http://localhost/kongfz/f-particulars.html?id=' + id;
} 

