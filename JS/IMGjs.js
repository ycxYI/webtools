
$(function(){  
    $("#saveImg").click(function(){  
        html2canvas($("#content"), {
            onrendered: function(canvas) {
             var imgUri = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // 获取生成的图片的url  
             //window.location.href= imgUri; // 下载图片  
             var newDate=new Date();
             var tDownload=$('#ttt').attr("href",imgUri).attr("download","YCXImage.png");

             tDownload[0].click();
            }
           });
     });  
});