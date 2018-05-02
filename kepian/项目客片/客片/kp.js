$(function(){
  //开机洒花瓣特效
  function getRandom1() {
    return 'rgba('+parseInt(Math.random()*255)+' , '+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+',.8 )'
  }
  
  var timer4 = setInterval(function () {
    $("<img src='images/xin1.png' alt=''>").css({
      // backgroundColor : getRandom1(),
      // fontSize : "20px",
      width : "50px",
      position : "absolute",
      top : "-30px",
      left : parseInt(Math.random() * 1300)
    }).appendTo("html").stop().animate({
      top : "6000px"
    },30000,function () {
      $(this).remove()
    })
  },300);


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
  
  
  
  
  
  
  
  
  
});