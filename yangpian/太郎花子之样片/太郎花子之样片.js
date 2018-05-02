$(function () {
  //导航栏里的随机变色
  var sw_colRandom;
  $(".sw_dhl_evet").mouseenter(function () {
    console.log("xxx");
    sw_colRandom = "rgb(" + (Math.ceil(Math.random() * 255)
      + " ," + Math.ceil(Math.random() * 255)
      + " ," + Math.ceil(Math.random() * 255)) + ")";
    $(this).css({"borderTopColor": sw_colRandom});
    $(this).stop().animate({"borderTopWidth": "10px"}, 300);
  }).mouseleave(function () {
    $(this).stop().animate({"borderTopWidth": "1px"}, 1000);
    $(this).css({
      "borderRightColor": "#ccc",
      "borderTopColor": "#ccc"
    })
  });
  //设置爱神丘比特透明度
  setInterval(function () {
    $("#sw-body-DHL").find("#qbt").animate({"opacity":0.1},1500,function () {
      $("#sw-body-DHL").find("#qbt").animate({"opacity":1},1000)
    });
  },2600);
  
  setInterval(function () {
  $("#sw-body-DHL").find(".sw_dhl_h").animate({
    "opacity":0.4,
    "backgroundColor":"rgb(255,0,0)"
  },500,function () {
    $("#sw-body-DHL").find(".sw_dhl_h").animate({
      "opacity":1,
      "backgroundColor":"rgb(255,192,203)"
    },500)
  })
  },1100);
  //设置图片组中的mouse动画
  var timer;
  $("#sw-content").find("li").mouseenter(function () {
    $(this).children("s").stop().show(500);
    //计时器左右移动icon字体
    timer = setInterval(function () {
      $("#sw-content").find(".icon-enterinto_fill").stop().animate({"paddingRight": "10px"}, 200, function () {
        $("#sw-content").find(".icon-enterinto_fill").stop().animate({"paddingRight": "0px"}, 200)
      })
    }, 500)

  }).mouseleave(function () {
    $(this).children("s").stop().hide(500);
    clearInterval(timer)
  })
  //点击换页变色
  $(".sw-page").find(".sw-xuhao").click(function () {
    $(this).css("backgroundColor", "#282828").siblings(".sw-xuhao").css("backgroundColor", "#fff");
  })
});
