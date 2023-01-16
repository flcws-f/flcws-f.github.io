$(document).ready(function(num){
                //获取文章数据
$.get("articles"+num+".txt",function(data,status){
$("body").html(data);
            });
        });
