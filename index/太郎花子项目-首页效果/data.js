/**
 * Created by Administrator on 2015/4/25.
 */
var data = [];

var dataStr = "1.霍比特人<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
片长:144分钟<br>\
<br>\
<br>\
2.冰雪奇缘<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
片长:144分钟<br>\
<br>\
<br>\
3.速度与激情7<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
片长:144分钟<br>\
<br>\
<br>\
4.一路惊喜<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
片长:144分钟<br>\
<br>\
<br>\
5.三傻大闹宝莱坞<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
片长:144分钟<br>\
<br>\
<br>\
6.甜心先生<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
片长:144分钟<br>\
<br>\
<br>\
7.青春三<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
片长:144分钟<br>\
<br>\
<br>\
8.美女<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
<br>\
<br>\
9.邓紫棋<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
<br>\
<br>\
10.铁塔<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
<br>\
<br>\
11.love<br>\
<br>\
导演:彼得.杰克逊<br>\
编剧:弗兰.威尔士<br>\
主演:傻逼<br>\
类型:动作<br>\
制片国家:美国<br>\
语言:英语<br>\
上映时间:2015-01-23<br>\
"
var d = dataStr.split("<br><br><br>");
for(var i = 0 ;i< d.length;i++){
	var c = d[i].split("<br><br>");
	data.push({
		img:c[0].replace(".","") + ".jpg",
		caption:c[0].split(".")[1],
		desc :c[1]
	});
}
console.log(data[0]);
