/**
 * Created by Administrator on 2015/4/25.
 */
    //定义mydata数组 , 用来分段返回值.
var myData = [] ;
//存储数据 , 包括内容为标题 , 图片地址名, 和简介 .
var myDataStr = "1.印象one<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
<br>\
<br>\
2.印象two<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
<br>\
<br>\
3.印象three<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
<br>\
<br>\
4.印象four<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
最美的年华<br>\
你是时间的礼物<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
<br>\
<br>\
5.印象five<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
<br>\
<br>\
6.印象six<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
最美的年华<br>\
你是时间的礼物<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
<br>\
<br>\
7.印象seven<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
<br>\
<br>\
8.印象eight<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
时光往复<br>\
恋你如初<br>\
最美的年华<br>\
你是时间的礼物<br>\
<br>\
<br>\
9.印象nine<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
<br>\
<br>\
10.印象ten<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
<br>\
<br>\
11.印象eleven<br>\
<br>\
岁月如歌<br>\
遇见你<br>\
是最美的意外<br>\
时光往复<br>\
恋你如初<br>\
余生请多指教<br>\
"
//定义函数分割myData数据 , myData接收分好组的数据 :以三个连续的<br>\标记为分界

var d = myDataStr.split("<br><br><br>");   //以三个br分出不同大主题
for(var i=0 ;i< d.length;i++){
    var c = d[i].split("<br><br>");
    myData.push(
        {
            img:c[0].replace('.',"")+".jpg",
            caption:c[0].split('.')[1],
            desc:c[1]
        }
    )
}

