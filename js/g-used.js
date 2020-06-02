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
function send1(id){
    window.location.href = 'http://localhost/kongfz/f-particulars.html?id=' + id;
}
mui(".content").on("singleTap","li",function(){
    send1($(this).children().eq(2).html());
})
mui(".content").on("singleTap",".g-list2-cont",function(){
    send1($(this).children().eq(2).html());
})
//分页
$.ajax({
    type: "GET",
    url: "http://localhost/kongfz/g-connect2.php?page=1",
    dataType:"JSON",
    success: function(data) {
        var list = JSON.parse(data)
        var ul="<ul>"
        $.each(list,function(i){
            ul+=`
                <li>
                    <div class="g-book-img">
                        <img src="${list[i].swiper_img1}" alt="">
                    </div>
                    <div class="g-book-item">
                        <p class="g-book-name">${list[i].book_name}</p>
                        <p class="g-book-store">
                            <span class="g-book-quality">${list[i].book_quality}</span>
                            <span class="g-bookstore">${list[i].book_Shop}</span>
                        </p>  
                        <p class="g-book-p">
                            <b>￥</b>
                            <span class="g-book-price">${list[i].book_price}</span>
                            <span class="g-putaway">${list[i].book_tab}</span>
                        </p>
                    </div>
                    <div class="bookId" style="display:none">${list[i].book_id}</div>
                </li>
            `
        })
        ul+="</ul>";
        var art="<div class='g-list2'>"
            $.each(list,function(i){
                art+=`
                    <div class="g-list2-cont">
                        <div class="g-height"></div>
                        <div class="g-cont2">
                            <p class="g-book-name1">${list[i].book_name}</p>
                            <p class="g-book-store1">
                                <span class="g-book-quality1">${list[i].book_quality}</span>
                                <span class="g-bookstore1">${list[i].book_Shop}</span>
                            </p>
                            <p class="g-book-p1">
                                <b>￥</b>
                                <span class="g-book-price1">${list[i].book_price}</span>
                                <span class="g-putaway1">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </div>
                `
            })
        art+= "</div>";
        $(".content").append(ul)
        $(".content").append(art)
    },
    error:function(xhr,status,error){
        console.log(error)
    }
})

$(".previous").on("singleTap",function(){
    $page=getNum(1)
    $(".page1").addClass("bold").siblings().removeClass("bold");
    $(".g-sort span").html("默认排序")
    $(".g-sort-list li a").removeClass("checked");
    $(".g-sort-list li span").removeClass("check");
    $(".g-default").addClass("checked");
    $(".g-default").next().addClass("check");
    //第一页升序
    $(".g-asc").on("singleTap",function(){
        $.ajax({
            type: "GET",
            url: "http://localhost/kongfz/kongfz/g-connect2.php?page=1",
            dataType:"JSON",
            success: function(data) {
                var list = JSON.parse(data)
                function ascprice(a,b){
                    return a.book_price-b.book_price
                }
                list.sort(ascprice)
                $(".content").empty()
                var ul="<ul>"
                $.each(list,function(i){
                    ul+=`
                        <li>
                            <div class="g-book-img">
                                <img src="${list[i].swiper_img1}" alt="">
                            </div>
                            <div class="g-book-item">
                                <p class="g-book-name">${list[i].book_name}</p>
                                <p class="g-book-store">
                                    <span class="g-book-quality">${list[i].book_quality}</span>
                                    <span class="g-bookstore">${list[i].book_Shop}</span>
                                </p>  
                                <p class="g-book-p">
                                    <b>￥</b>
                                    <span class="g-book-price">${list[i].book_price}</span>
                                    <span class="g-putaway">${list[i].book_tab}</span>
                                </p>
                            </div>
                            <div class="bookId" style="display:none">${list[i].book_id}</div>
                        </li>
                    `
                })
                ul+="</ul>";
                var art="<div class='g-list2'>"
                    $.each(list,function(i){
                        art+=`
                        <div class="g-list2-cont">
                            <div class="g-height"></div>
                            <div class="g-cont2">
                                <p class="g-book-name1">${list[i].book_name}</p>
                                <p class="g-book-store1">
                                    <span class="g-book-quality1">${list[i].book_quality}</span>
                                    <span class="g-bookstore1">${list[i].book_Shop}</span>
                                </p>
                                <p class="g-book-p1">
                                    <b>￥</b>
                                    <span class="g-book-price1">${list[i].book_price}</span>
                                    <span class="g-putaway1">${list[i].book_tab}</span>
                                </p>
                            </div>
                            <div class="bookId" style="display:none">${list[i].book_id}</div>
                        </div>
                        `
                    })
                art+= "</div>";
                $(".content").append(ul)
                $(".content").append(art)
            },
            error:function(xhr,status,error){
                console.log(error)
            }
        })
    });
    //第一页降序
    $(".g-descending").on("singleTap",function(){
        $.ajax({
            type: "GET",
            url: "http://localhost/kongfz/kongfz/g-connect2.php?page=1",
            dataType:"JSON",
            success: function(data) {
                var list = JSON.parse(data)
                function descprice(a,b){
                    return a.book_price-b.book_price
                }
                var lists=list.sort(descprice)
                list.reverse(lists)
                // console.log(list)
                $(".content").empty()
                var ul="<ul>"
                $.each(list,function(i){
                    ul+=`
                        <li>
                            <div class="g-book-img">
                                <img src="${list[i].swiper_img1}" alt="">
                            </div>
                            <div class="g-book-item">
                                <p class="g-book-name">${list[i].book_name}</p>
                                <p class="g-book-store">
                                    <span class="g-book-quality">${list[i].book_quality}</span>
                                    <span class="g-bookstore">${list[i].book_Shop}</span>
                                </p>  
                                <p class="g-book-p">
                                    <b>￥</b>
                                    <span class="g-book-price">${list[i].book_price}</span>
                                    <span class="g-putaway">${list[i].book_tab}</span>
                                </p>
                            </div>
                            <div class="bookId" style="display:none">${list[i].book_id}</div>
                        </li>
                    `
                })
                ul+="</ul>";
                var art="<div class='g-list2'>"
                    $.each(list,function(i){
                        art+=`
                        <div class="g-list2-cont">
                            <div class="g-height"></div>
                            <div class="g-cont2">
                                <p class="g-book-name1">${list[i].book_name}</p>
                                <p class="g-book-store1">
                                    <span class="g-book-quality1">${list[i].book_quality}</span>
                                    <span class="g-bookstore1">${list[i].book_Shop}</span>
                                </p>
                                <p class="g-book-p1">
                                    <b>￥</b>
                                    <span class="g-book-price1">${list[i].book_price}</span>
                                    <span class="g-putaway1">${list[i].book_tab}</span>
                                </p>
                            </div>
                            <div class="bookId" style="display:none">${list[i].book_id}</div>
                        </div>
                        `
                    })
                art+= "</div>";
                $(".content").append(ul)
                $(".content").append(art)
            },
            error:function(xhr,status,error){
                console.log(error)
            }
        })
    })
    //第一页默认排序
$(".g-default").on("singleTap",function(){
    $.ajax({
        type: "GET",
        url: "http://localhost/kongfz/g-connect2.php?page=1",
        dataType:"JSON",
        success: function(data) {
            var list = JSON.parse(data)
            $(".content").empty()
            var ul="<ul>"
            $.each(list,function(i){
                ul+=`
                    <li>
                        <div class="g-book-img">
                            <img src="${list[i].swiper_img1}" alt="">
                        </div>
                        <div class="g-book-item">
                            <p class="g-book-name">${list[i].book_name}</p>
                            <p class="g-book-store">
                                <span class="g-book-quality">${list[i].book_quality}</span>
                                <span class="g-bookstore">${list[i].book_Shop}</span>
                            </p>  
                            <p class="g-book-p">
                                <b>￥</b>
                                <span class="g-book-price">${list[i].book_price}</span>
                                <span class="g-putaway">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </li>
                `
            })
            ul+="</ul>";
            var art="<div class='g-list2'>"
                $.each(list,function(i){
                    art+=`
                    <div class="g-list2-cont">
                        <div class="g-height"></div>
                        <div class="g-cont2">
                            <p class="g-book-name1">${list[i].book_name}</p>
                            <p class="g-book-store1">
                                <span class="g-book-quality1">${list[i].book_quality}</span>
                                <span class="g-bookstore1">${list[i].book_Shop}</span>
                            </p>
                            <p class="g-book-p1">
                                <b>￥</b>
                                <span class="g-book-price1">${list[i].book_price}</span>
                                <span class="g-putaway1">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </div>
                    `
                })
            art+= "</div>";
            $(".content").append(ul)
            $(".content").append(art)   
        },
        error:function(xhr,status,error){
            console.log(error)
        }
    })
})
})
$(".next").on("singleTap",function(){
    $page=getNum(2)
    $(".page2").addClass("bold").siblings().removeClass("bold");
    $(".g-sort span").html("默认排序")
    $(".g-sort-list li a").removeClass("checked");
    $(".g-sort-list li span").removeClass("check");
    $(".g-default").addClass("checked");
    $(".g-default").next().addClass("check");
    //第2页升序
    $(".g-asc").on("singleTap",function(){
        $.ajax({
            type: "GET",
            url: "http://localhost/kongfz/g-connect2.php?page=2",
            dataType:"JSON",
            success: function(data) {
                var list = JSON.parse(data)
                function ascprice(a,b){
                    return a.book_price-b.book_price
                }
                list.sort(ascprice)
                $(".content").empty()
                var ul="<ul>"
                $.each(list,function(i){
                    ul+=`
                        <li>
                            <div class="g-book-img">
                                <img src="${list[i].swiper_img1}" alt="">
                            </div>
                            <div class="g-book-item">
                                <p class="g-book-name">${list[i].book_name}</p>
                                <p class="g-book-store">
                                    <span class="g-book-quality">${list[i].book_quality}</span>
                                    <span class="g-bookstore">${list[i].book_Shop}</span>
                                </p>  
                                <p class="g-book-p">
                                    <b>￥</b>
                                    <span class="g-book-price">${list[i].book_price}</span>
                                    <span class="g-putaway">${list[i].book_tab}</span>
                                </p>
                            </div>
                            <div class="bookId" style="display:none">${list[i].book_id}</div>
                        </li>
                    `
                })
                ul+="</ul>";
                var art="<div class='g-list2'>"
                    $.each(list,function(i){
                        art+=`
                        <div class="g-list2-cont">
                            <div class="g-height"></div>
                            <div class="g-cont2">
                                <p class="g-book-name1">${list[i].book_name}</p>
                                <p class="g-book-store1">
                                    <span class="g-book-quality1">${list[i].book_quality}</span>
                                    <span class="g-bookstore1">${list[i].book_Shop}</span>
                                </p>
                                <p class="g-book-p1">
                                    <b>￥</b>
                                    <span class="g-book-price1">${list[i].book_price}</span>
                                    <span class="g-putaway1">${list[i].book_tab}</span>
                                </p>
                            </div>
                            <div class="bookId" style="display:none">${list[i].book_id}</div>
                        </div>
                        `
                    })
                art+= "</div>";
                $(".content").append(ul)
                $(".content").append(art)
            },
            error:function(xhr,status,error){
                console.log(error)
            }
        })
    });
//第2页降序
$(".g-descending").on("singleTap",function(){
    $.ajax({
        type: "GET",
        url: "http://localhost/kongfz/g-connect2.php?page=2",
        dataType:"JSON",
        success: function(data) {
            var list = JSON.parse(data)
            function descprice(a,b){
                return a.book_price-b.book_price
            }
            var lists=list.sort(descprice)
            list.reverse(lists)
            console.log(list)
            $(".content").empty()
            var ul="<ul>"
            $.each(list,function(i){
                ul+=`
                    <li>
                        <div class="g-book-img">
                            <img src="${list[i].swiper_img1}" alt="">
                        </div>
                        <div class="g-book-item">
                            <p class="g-book-name">${list[i].book_name}</p>
                            <p class="g-book-store">
                                <span class="g-book-quality">${list[i].book_quality}</span>
                                <span class="g-bookstore">${list[i].book_Shop}</span>
                            </p>  
                            <p class="g-book-p">
                                <b>￥</b>
                                <span class="g-book-price">${list[i].book_price}</span>
                                <span class="g-putaway">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </li>
                `
            })
            ul+="</ul>";
            var art="<div class='g-list2'>"
                $.each(list,function(i){
                    art+=`
                    <div class="g-list2-cont">
                        <div class="g-height"></div>
                        <div class="g-cont2">
                            <p class="g-book-name1">${list[i].book_name}</p>
                            <p class="g-book-store1">
                                <span class="g-book-quality1">${list[i].book_quality}</span>
                                <span class="g-bookstore1">${list[i].book_Shop}</span>
                            </p>
                            <p class="g-book-p1">
                                <b>￥</b>
                                <span class="g-book-price1">${list[i].book_price}</span>
                                <span class="g-putaway1">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </div>
                    `
                })
            art+= "</div>";
            $(".content").append(ul)
            $(".content").append(art)
        },
        error:function(xhr,status,error){
            console.log(error)
        }
    })
})
//第2页默认排序
$(".g-default").on("singleTap",function(){
    $.ajax({
        type: "GET",
        url: "http://localhost/kongfz/g-connect2.php?page=2",
        dataType:"JSON",
        success: function(data) {
            var list = JSON.parse(data)
            $(".content").empty()
            var ul="<ul>"
            $.each(list,function(i){
                ul+=`
                    <li>
                        <div class="g-book-img">
                            <img src="${list[i].swiper_img1}" alt="">
                        </div>
                        <div class="g-book-item">
                            <p class="g-book-name">${list[i].book_name}</p>
                            <p class="g-book-store">
                                <span class="g-book-quality">${list[i].book_quality}</span>
                                <span class="g-bookstore">${list[i].book_Shop}</span>
                            </p>  
                            <p class="g-book-p">
                                <b>￥</b>
                                <span class="g-book-price">${list[i].book_price}</span>
                                <span class="g-putaway">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </li>
                `
            })
            ul+="</ul>";
            var art="<div class='g-list2'>"
                $.each(list,function(i){
                    art+=`
                    <div class="g-list2-cont">
                        <div class="g-height"></div>
                        <div class="g-cont2">
                            <p class="g-book-name1">${list[i].book_name}</p>
                            <p class="g-book-store1">
                                <span class="g-book-quality1">${list[i].book_quality}</span>
                                <span class="g-bookstore1">${list[i].book_Shop}</span>
                            </p>
                            <p class="g-book-p1">
                                <b>￥</b>
                                <span class="g-book-price1">${list[i].book_price}</span>
                                <span class="g-putaway1">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </div>
                    `
                })
            art+= "</div>";
            $(".content").append(ul)
            $(".content").append(art)   
        },
        error:function(xhr,status,error){
            console.log(error)
        }
    })
})
})
function getNum(data){
$.ajax({
    type: "GET",
    url: "http://localhost/kongfz/g-connect2.php?page="+ data,
    dataType:"JSON",
    success: function(data) {
        var list = JSON.parse(data)
        $(".content").empty()
        var ul="<ul>"
        $.each(list,function(i){
            ul+=`
                <li>
                    <div class="g-book-img">
                        <img src="${list[i].swiper_img1}" alt="">
                    </div>
                    <div class="g-book-item">
                        <p class="g-book-name">${list[i].book_name}</p>
                        <p class="g-book-store">
                            <span class="g-book-quality">${list[i].book_quality}</span>
                            <span class="g-bookstore">${list[i].book_Shop}</span>
                        </p>  
                        <p class="g-book-p">
                            <b>￥</b>
                            <span class="g-book-price">${list[i].book_price}</span>
                            <span class="g-putaway">${list[i].book_tab}</span>
                        </p>
                    </div>
                    <div class="bookId" style="display:none">${list[i].book_id}</div>
                </li>
            `
        })
        ul+="</ul>";
        var art="<div class='g-list2'>"
            $.each(list,function(i){
                art+=`
                    <div class="g-list2-cont">
                        <div class="g-height"></div>
                        <div class="g-cont2">
                            <p class="g-book-name1">${list[i].book_name}</p>
                            <p class="g-book-store1">
                                <span class="g-book-quality1">${list[i].book_quality}</span>
                                <span class="g-bookstore1">${list[i].book_Shop}</span>
                            </p>
                            <p class="g-book-p1">
                                <b>￥</b>
                                <span class="g-book-price1">${list[i].book_price}</span>
                                <span class="g-putaway1">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </div>
                `
            })
        art+= "</div>";
        $(".content").append(ul)
        $(".content").append(art)
    },
    error:function(xhr,status,error){
        console.log(error)
    }
})
}
$(".g-asc").on("singleTap",function(){
    $.ajax({
        type: "GET",
        url: "http://localhost/kongfz/g-connect2.php?page=1",
        dataType:"JSON",
        success: function(data) {
            var list = JSON.parse(data)
            function ascprice(a,b){
                return a.book_price-b.book_price
            }
            list.sort(ascprice)
            $(".content").empty()
            var ul="<ul>"
            $.each(list,function(i){
                ul+=`
                    <li>
                        <div class="g-book-img">
                            <img src="${list[i].swiper_img1}" alt="">
                        </div>
                        <div class="g-book-item">
                            <p class="g-book-name">${list[i].book_name}</p>
                            <p class="g-book-store">
                                <span class="g-book-quality">${list[i].book_quality}</span>
                                <span class="g-bookstore">${list[i].book_Shop}</span>
                            </p>  
                            <p class="g-book-p">
                                <b>￥</b>
                                <span class="g-book-price">${list[i].book_price}</span>
                                <span class="g-putaway">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </li>
                `
            })
            ul+="</ul>";
            var art="<div class='g-list2'>"
                $.each(list,function(i){
                    art+=`
                    <div class="g-list2-cont">
                        <div class="g-height"></div>
                        <div class="g-cont2">
                            <p class="g-book-name1">${list[i].book_name}</p>
                            <p class="g-book-store1">
                                <span class="g-book-quality1">${list[i].book_quality}</span>
                                <span class="g-bookstore1">${list[i].book_Shop}</span>
                            </p>
                            <p class="g-book-p1">
                                <b>￥</b>
                                <span class="g-book-price1">${list[i].book_price}</span>
                                <span class="g-putaway1">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </div>
                    `
                })
            art+= "</div>";
            $(".content").append(ul)
            $(".content").append(art)
        },
        error:function(xhr,status,error){
            console.log(error)
        }
    })
});
//第一页降序
$(".g-descending").on("singleTap",function(){
    $.ajax({
        type: "GET",
        url: "http://localhost/kongfz/g-connect2.php?page=1",
        dataType:"JSON",
        success: function(data) {
            var list = JSON.parse(data)
            function descprice(a,b){
                return a.book_price-b.book_price
            }
            var lists=list.sort(descprice)
            list.reverse(lists)
            // console.log(list)
            $(".content").empty()
            var ul="<ul>"
            $.each(list,function(i){
                ul+=`
                    <li>
                        <div class="g-book-img">
                            <img src="${list[i].swiper_img1}" alt="">
                        </div>
                        <div class="g-book-item">
                            <p class="g-book-name">${list[i].book_name}</p>
                            <p class="g-book-store">
                                <span class="g-book-quality">${list[i].book_quality}</span>
                                <span class="g-bookstore">${list[i].book_Shop}</span>
                            </p>  
                            <p class="g-book-p">
                                <b>￥</b>
                                <span class="g-book-price">${list[i].book_price}</span>
                                <span class="g-putaway">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </li>
                `
            })
            ul+="</ul>";
            var art="<div class='g-list2'>"
                $.each(list,function(i){
                    art+=`
                    <div class="g-list2-cont">
                        <div class="g-height"></div>
                        <div class="g-cont2">
                            <p class="g-book-name1">${list[i].book_name}</p>
                            <p class="g-book-store1">
                                <span class="g-book-quality1">${list[i].book_quality}</span>
                                <span class="g-bookstore1">${list[i].book_Shop}</span>
                            </p>
                            <p class="g-book-p1">
                                <b>￥</b>
                                <span class="g-book-price1">${list[i].book_price}</span>
                                <span class="g-putaway1">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </div>
                    `
                })
            art+= "</div>";
            $(".content").append(ul)
            $(".content").append(art)
        },
        error:function(xhr,status,error){
            console.log(error)
        }
    })
})
// //默认排序
$(".g-default").on("singleTap",function(){
$.ajax({
    type: "GET",
    url: "http://localhost/kongfz/g-connect2.php?page=1",
    dataType:"JSON",
    success: function(data) {
        var list = JSON.parse(data)
        $(".content").empty()
        var ul="<ul>"
        $.each(list,function(i){
            ul+=`
                <li>
                    <div class="g-book-img">
                        <img src="${list[i].swiper_img1}" alt="">
                    </div>
                    <div class="g-book-item">
                        <p class="g-book-name">${list[i].book_name}</p>
                        <p class="g-book-store">
                            <span class="g-book-quality">${list[i].book_quality}</span>
                            <span class="g-bookstore">${list[i].book_Shop}</span>
                        </p>  
                        <p class="g-book-p">
                            <b>￥</b>
                            <span class="g-book-price">${list[i].book_price}</span>
                            <span class="g-putaway">${list[i].book_tab}</span>
                        </p>
                    </div>
                    <div class="bookId" style="display:none">${list[i].book_id}</div>
                </li>
            `
        })
        ul+="</ul>";
        var art="<div class='g-list2'>"
            $.each(list,function(i){
                art+=`
                    <div class="g-list2-cont">
                        <div class="g-height"></div>
                        <div class="g-cont2">
                            <p class="g-book-name1">${list[i].book_name}</p>
                            <p class="g-book-store1">
                                <span class="g-book-quality1">${list[i].book_quality}</span>
                                <span class="g-bookstore1">${list[i].book_Shop}</span>
                            </p>
                            <p class="g-book-p1">
                                <b>￥</b>
                                <span class="g-book-price1">${list[i].book_price}</span>
                                <span class="g-putaway1">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </div>
                `
            })
        art+= "</div>";
        $(".content").append(ul)
        $(".content").append(art)
    },
    error:function(xhr,status,error){
        console.log(error)
    }
})
})
// 按地方搜索
$(".g-location-list li").on("singleTap",function(){
    $place=getPlace($(this).html().substr(0,2))
    function getPlace(place) {
        $.ajax({
            type: "GET",
            url: "http://localhost/kongfz/g-searchPlace.php?&place="+place,
            dataType:"JSON",
            success: function(data) {
                if(data==''){
                    $(".content").empty();
                    $(".g-seach-null").css("display","block")
                }else{
                    var list = JSON.parse(data)
                    $(".content").empty()
                    $(".g-seach-null").css("display","none")
                    var ul="<ul>"
                    $.each(list,function(i){
                        ul+=`
                            <li>
                                <div class="g-book-img">
                                    <img src="${list[i].swiper_img1}" alt="">
                                </div>
                                <div class="g-book-item">
                                    <p class="g-book-name">${list[i].book_name}</p>
                                    <p class="g-book-store">
                                        <span class="g-book-quality">${list[i].book_quality}</span>
                                        <span class="g-bookstore">${list[i].book_Shop}</span>
                                    </p>  
                                    <p class="g-book-p">
                                        <b>￥</b>
                                        <span class="g-book-price">${list[i].book_price}</span>
                                        <span class="g-putaway">${list[i].book_tab}</span>
                                    </p>
                                </div>
                                <div class="bookId" style="display:none">${list[i].book_id}</div>
                            </li>
                        `
                    })
                    ul+="</ul>";
                    var art="<div class='g-list2'>"
                        $.each(list,function(i){
                            art+=`
                            <div class="g-list2-cont">
                                <div class="g-height"></div>
                                <div class="g-cont2">
                                    <p class="g-book-name1">${list[i].book_name}</p>
                                    <p class="g-book-store1">
                                        <span class="g-book-quality1">${list[i].book_quality}</span>
                                        <span class="g-bookstore1">${list[i].book_Shop}</span>
                                    </p>
                                    <p class="g-book-p1">
                                        <b>￥</b>
                                        <span class="g-book-price1">${list[i].book_price}</span>
                                        <span class="g-putaway1">${list[i].book_tab}</span>
                                    </p>
                                </div>
                                <div class="bookId" style="display:none">${list[i].book_id}</div>
                            </div>
                            `
                        })
                    art+= "</div>";
                    $(".content").append(ul)
                    $(".content").append(art)
                }
            },
            error:function(xhr,status,error){
                console.log(error)
            }
        })
    }
})

//按自定义价格搜索
$(".g-sure").on("singleTap",function(){
getp($low=$(".g-low").val(),$high=$(".g-high").val());
$(".g-low, .g-high").val("");
$(".g-filter-condition").removeClass("g-show-div");
$(".content, .g-page, .g-footer").show();
})
function getp(low,high){
    $.ajax({
        type: "GET",
        url: "http://localhost/kongfz/g-searchPrice.php?low="+low+"&high="+high,
        dataType:"JSON",
        success: function(data) {
            var list = JSON.parse(data)
            console.log(list)
            $(".content").empty()
            var ul="<ul>"
            $.each(list,function(i){
                ul+=`
                    <li>
                        <div class="g-book-img">
                            <img src="${list[i].swiper_img1}" alt="">
                        </div>
                        <div class="g-book-item">
                            <p class="g-book-name">${list[i].book_name}</p>
                            <p class="g-book-store">
                                <span class="g-book-quality">${list[i].book_quality}</span>
                                <span class="g-bookstore">${list[i].book_Shop}</span>
                            </p>  
                            <p class="g-book-p">
                                <b>￥</b>
                                <span class="g-book-price">${list[i].book_price}</span>
                                <span class="g-putaway">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </li>
                `
            })
            ul+="</ul>";
            var art="<div class='g-list2'>"
                $.each(list,function(i){
                    art+=`
                    <div class="g-list2-cont">
                        <div class="g-height"></div>
                        <div class="g-cont2">
                            <p class="g-book-name1">${list[i].book_name}</p>
                            <p class="g-book-store1">
                                <span class="g-book-quality1">${list[i].book_quality}</span>
                                <span class="g-bookstore1">${list[i].book_Shop}</span>
                            </p>
                            <p class="g-book-p1">
                                <b>￥</b>
                                <span class="g-book-price1">${list[i].book_price}</span>
                                <span class="g-putaway1">${list[i].book_tab}</span>
                            </p>
                        </div>
                        <div class="bookId" style="display:none">${list[i].book_id}</div>
                    </div>
                    `
                })
            art+= "</div>";
            $(".content").append(ul)
            $(".content").append(art)
        },
        error:function(xhr,status,error){
            console.log(error)
        }
    })  
}
//tab切换
$(".li").on("singleTap",function(){
    $(this).addClass("g-show").siblings().removeClass("g-show");
    var index=$(this).index();
    $(".li-list").eq(index).addClass("g-show-div").siblings().removeClass("g-show-div");
    $(".i").removeClass("g-show-i");
    $(".i").eq(index).addClass("g-show-i");
    $(".content, .g-page, .g-footer").hide();    
})
$(".g-sort-list li,.g-location-list li").on("singleTap",function(){
    $(".li-list").removeClass("g-show-div");
    $(".i").removeClass("g-show-i");
    $(".content, .g-page, .g-footer").show();
    var txt = $(this).text();
    $(".g-show span").text(txt);
})
$(".g-sort-list li ").on("singleTap",function(){
    $(".g-sort-list li a").removeClass("checked");
    $(".g-sort-list li span").removeClass("check");
    $(this).children(":first-child").addClass("checked")
    $(this).children(":last-child").addClass("check")
})
$(".g-location-list li").on("singleTap",function(){
    $(this).addClass("g-location-check").siblings().removeClass("g-location-check")
})
$(".g-filter-condition li").on("singleTap",function(){
    var category=$(this).children(":first-child").text()
    $(".g-category").text(category)
    $(this).css("display","block").siblings().css("display","none")
    // $(".g-show-div").hide();
    $(".li-list").removeClass("g-show-div");
    $(".content, .g-page, .g-footer").show();
})
//变换样式
var num=1
$(".g-list").on("singleTap",function(){
    if(num%2==1){
        $(".g-height-hide").hide();
        $(".content ul").hide();
        $(".g-list2").show()
    }else{
        $(".g-height-hide").show();
        $(".content ul").show();
        $(".g-list2").hide()
    }
    num+=1;
})
$(".logo,.index").on("singleTap",function(){
    window.location.href = "index.html"
})
$(".search, .g-search2").on("singleTap",function(){
    window.location.href = "search.html"
})
$(".g-line").on("singleTap",function(){
    window.location.href = "g-line.html"
})
$(".g-msg").on("singleTap",function(){
    window.location.href = "msg.html"
})
$(".a-shopping-car").on("singleTap",function(){
    window.location.href = "a-shopping-car.html"
})
$(".mine").on("singleTap",function(){
    window.location.href = "mine.html"
})
$(".a-indent").on("singleTap",function(){
    window.location.href = "a-indent.html"
})
$(".b-bookShop").on("singleTap",function(){
    window.location.href = "b-bookShop.html"
})
