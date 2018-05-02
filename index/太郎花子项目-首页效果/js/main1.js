$(function () {
    // 底部轮播图
    var count=0;
    $(".b-arrow-right").click(function () {
        count++;
        if(count==$(".slider li").length){
            count=0;
        }
        $(".slider li").eq(count).stop().fadeIn().siblings("li").fadeOut();

    });
    $(".b-arrow-left").click(function () {
        count--;
        if (count==-1){
            count=$(".slider li").length-1;
        }
        $(".slider li").eq(count).stop().fadeIn().siblings("li").fadeOut();
    });
});
