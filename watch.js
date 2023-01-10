$(document).ready(function(){
hash=document.location.hash;
if(hash=="#cctv1"){
title.innerHTML="CCTV1 综合";
vid.src="./cctv1.m3u8";
$("title").html("电视直播观看-CCTV1");
}
else if(hash=="#cctv2"){
title.innerHTML="CCTV2 财经";
vid.src="./cctv2.m3u8";
$("title").html("电视直播观看-CCTV2");
}
else if(hash=="#cctv3"){
title.innerHTML="CCTV3 综艺";
vid.src="./cctv3.m3u8";
$("title").html("电视直播观看-CCTV3");
}
else if(hash=="#cctv4"){
title.innerHTML="CCTV4 中文国际";
vid.src="http://111.59.63.32:9901/tsfile/live/1011_1.m3u8";
$("title").html("电视直播观看-CCTV4");
}
else if(hash=="#cctv5"){
title.innerHTML="CCTV5 体育";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225818/index.m3u8";
$("title").html("电视直播观看-CCTV5");
}
else if(hash=="#cctv5p"){
title.innerHTML="CCTV5+ 体育赛事";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225507/index.m3u8";
$("title").html("电视直播观看-CCTV5+");
}
else if(hash=="#cctv6"){
title.innerHTML="CCTV6 电影";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225814/index.m3u8";
$("title").html("电视直播观看-CCTV6");
}
else if(hash=="#cctv7"){
title.innerHTML="CCTV7 国防军事";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225671/index.m3u8";
$("title").html("电视直播观看-CCTV7");
}
else if(hash=="#cctv8"){
title.innerHTML="CCTV8 电视剧";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225795/index.m3u8";
$("title").html("电视直播观看-CCTV8");
}
else if(hash=="#cctv9"){
title.innerHTML="CCTV9 纪录";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225676/index.m3u8";
$("title").html("电视直播观看-CCTV9");
}
else if(hash=="#cctv10"){
title.innerHTML="CCTV10 科教";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225677/index.m3u8";
$("title").html("电视直播观看-CCTV10");
}
else if(hash=="#cctv11"){
title.innerHTML="CCTV11 戏曲";
vid.src="http://39.135.138.59:18890/PLTV/88888910/224/3221225628/index.m3u8";
$("title").html("电视直播观看-CCTV11");
}
else if(hash=="#cctv12"){
title.innerHTML="CCTV12 社会与法";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225669/index.m3u8";
$("title").html("电视直播观看-CCTV12");
}
else if(hash=="#cctv13"){
title.innerHTML="CCTV13 新闻";
vid.src="http://39.135.138.59:18890/PLTV/88888910/224/3221225638/index.m3u8";
$("title").html("电视直播观看-CCTV13");
}
else if(hash=="#cctv14"){
title.innerHTML="CCTV14 少儿";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225674/index.m3u8";
$("title").html("电视直播观看-CCTV14");
}
else if(hash=="#cctv15"){
title.innerHTML="CCTV15 音乐";
vid.src="http://39.135.138.60:18890/PLTV/88888910/224/3221225641/index.m3u8";
$("title").html("电视直播观看-CCTV15");
}
else if(hash=="#cctv16"){
title.innerHTML="CCTV16 奥林匹克";
vid.src="http://39.134.115.163:8080/PLTV/88888910/224/3221226230/index.m3u8";
$("title").html("电视直播观看-CCTV16");
}
else if(hash=="#cctv17"){
title.innerHTML="CCTV17 农业农村";
vid.src="http://39.134.66.110/PLTV/88888888/224/3221225708/index.m3u8";
$("title").html("电视直播观看-CCTV17");
}
else if(hash=="#cctv4k"){
title.innerHTML="CCTV4K 4K";
vid.src="pre";
$("title").html("电视直播观看-CCTV4K");
}
else{
title.innerHTML="未知节目<p style='font-size:15px;'>找不到这个直播</p>";
vid.loop="loop";
vid.src="error.mp4";
}
});
