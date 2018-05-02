$(function(){
  //开机洒花瓣特效
  function getRandom1() {
    return 'rgba('+parseInt(Math.random()*255)+' , '+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+',.8 )'
  }
  
  var timer4 = setInterval(function () {
    $("<img src='images/美丽的小粉花.gif' alt=''>").css({
      // backgroundColor : getRandom1(),
      // fontSize : "20px",
      width : "50px",
      position : "absolute",
      top : "-30px",
      left : parseInt(Math.random() * 1180)
    }).appendTo("html").stop().animate({
      top : "4750px"
    },20000,function () {
      $(this).remove()
    })
  },300);
});