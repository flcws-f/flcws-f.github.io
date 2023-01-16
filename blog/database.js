function getdatas(num){
                //获取文章数据
            $.ajax({
                type: "GET",
                url: "articles"+num+".txt",
                success: function(data) {
                    $("body").html(data);
                           }
            });
        }
