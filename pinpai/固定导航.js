/**
 * Created by cr on 2017/9/5.
 */
$(function () {
  //左边的固定导航
  $(".fixedLeft a").mouseenter(function () {
    $(this).stop().animate({"width":"120px"},300)
  }).mouseleave(function () {
    $(this).stop().animate({"width":"80px"})
  });
  $(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() < 800){
      $(".fixedLeft").hide(500);
    }else {
      $(".fixedLeft").show(500);
    }
  });
  $(".fixedLeft").find(".qj_5").parents("a").click(function () {
    $("html,body").animate({scrollTop:0},500)
  });

  //右边的QQ客服
  $(".closeQQ").click(function () {
    $(this).siblings().andSelf().hide(500);
  })
});
