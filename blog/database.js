$(document).ready(function(){
                //获取文章数据
$.get("articles"+document.location.hash+".txt",function(data,status){
$("body").html(data);
            });
        });
