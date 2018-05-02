$(function () {
  // 下拉框效果
  $(".w>ul>li:nth-child(2) a").mouseenter(function () {

   $(".main-nav ul li .ul a").show().css("backgroundColor","black");
  })
  $(".w>ul>li:nth-child(2) a").mouseleave(function () {
    $(".main-nav ul li .ul a").hide();
  })
  
  $(".w>ul>li:nth-child(1) a").mouseenter(function () {

    $(".main-nav ul li .ul1 a").show().css("backgroundColor","black");
  })
  $(".w>ul>li:nth-child(1) a").mouseleave(function () {
    $(".main-nav ul li .ul1 a").hide();
  })
//首页头部轮播图
var count = 0;
  $(".right-arrow").click(function () {
    count++;
    if(count > 4){
      count = 0;
    }
    $(".main-banner li").eq(count).show().siblings().hide();

  });
  $(".left-arrow").click(function(){
    count--;
    if(count < 0){
      count = 4;
    }
    $(".main-banner li").eq(count).show().siblings().hide();
  });

  $(".main-banner").mouseenter(function(){
    clearInterval(timer)
  });
  $(".main-banner").mouseleave(function(){
    timer = setInterval(function () {
      $(".right-arrow").click()
    },1000);
  });

  var timer = setInterval(function () {
    $(".right-arrow").click()
  },1000);

//tab栏
  $(".l-p1-b li").mouseenter(function () {
    $(this).addClass("red-head").siblings().removeClass("red-head");
    var index = $(this).index();
    $(".l-p1-t li").eq(index).stop().slideDown().siblings().stop().slideUp()
  });
  $(".l-p1-t li").mouseenter(function () {
    $(".hide").stop().fadeIn(500)
  });
  $(".l-p1-t li").mouseleave(function () {
    $(".hide").stop().fadeOut(400)
  });
  
  
  //tab栏右侧
  $(".r-p1 li").mouseenter(function () {
    $(this).find($(".hide1")).stop().fadeIn()
  });
  $(".r-p1 li").mouseleave(function () {
    $(this).find($(".hide1")).stop().fadeOut()
  });
  
  $(".gd-proto-b li").mouseenter(function () {
    $(this).find($(".hide2")).stop().slideDown()
  });
  $(".gd-proto-b li").mouseleave(function () {
    $(this).find($(".hide2")).stop().slideUp()
  });

  //数字随机数
  function getRandom() {
    return parseInt(Math.random()*9)
  }
  var timer3 = setInterval(function () {
    $(".ran").text(getRandom())
  },3000);

  //导航钢琴
  $(".main-nav li").mouseenter(function () {
    var index = $(this).index()
    $("audio").eq(index)[0].load();
    $("audio").eq(index)[0].play()
  })

});