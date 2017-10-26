


//js自带base64自带加解密（不可用中文）
//alert(window.atob("dGVzdA=="));
window.onload=new function(){
 
    // $("#ceshi").click(function (e) { 
    //     alert("123");
    // });
   //1.加密解密方法使用：
//1.加密  
// var str = "这是中文编码";  
// var base = new Base64();  
// var result = base.encode(str);  


// //2.解密  
// var str2="MjAxNzAxMTdfMjk2NTI=";
// var result2 = base.decode(str2);  


// document.write("加密："+result);  
// document.write("<br\>解密："+result2);  
}

function jiami(){
    var base = new Base64();  
    var txt_input=document.getElementById("txt_input").value;
    //var txt_output=document.getElementById("txt_output").value;
    document.getElementById("txt_output").value=base.encode(txt_input);
    
}

function jiemi(){
    var base = new Base64();  
    var txt_input=document.getElementById("txt_input").value;
    //var txt_output=document.getElementById("txt_output").value;
    document.getElementById("txt_output").value=base.decode(txt_input);
}



function tounicode()
{
   var txt_input=document.getElementById("txt_input").value;
   var data=txt_input;
   var str =''; 
   if(data == '') str='请输入汉字';
   for(var i=0;i<data.length;i++)
   {
      str+="\\u"+parseInt(data[i].charCodeAt(0),10).toString(16);
   }
   document.getElementById("txt_output").value=str;
}
function tohanzi(data)
{
    var txt_input=document.getElementById("txt_input").value;
    var data=txt_input;
    var str ='';
    if(data == '') str='请输入十六进制unicode';
    data = data.split("\\u");
    for(var i=0;i<data.length;i++)
    {
        str+=String.fromCharCode(parseInt(data[i],16).toString(10));
    }
    document.getElementById("txt_output").value=str;
}








//-------------------------------------------------------------------------------------
//加密、解密算法封装
//-------------------------------------------------------------------------------------
   
function Base64() {  
   
    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
   
    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  
   
    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  
   
    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
   
        }  
        return utftext;  
    }  
   
    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
}


//imageTobase64
function convertImgToBase64(url, callback, outputFormat){
    var canvas = document.createElement('CANVAS'),
      ctx = canvas.getContext('2d'),
      img = new Image;
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
      canvas.height = img.height;
      canvas.width = img.width;
      ctx.drawImage(img,0,0);
      var dataURL = canvas.toDataURL(outputFormat || 'image/png');
      callback.call(this, dataURL);
      canvas = null; 
    };
    img.src = url;
}
  
//图片转base64
//C:\Users\ThinkPad\Desktop\img\IMG_3101.JPG
var urlstr="file://C:/Users/ThinkPad/Desktop/test/myImage.jpg";
//document.write("<img src='"+urlstr+"'/>");
document.close();
  var urlstr1="http://img4.imgtn.bdimg.com/it/u=3056092689,777274357&fm=27&gp=0.jpg"
  convertImgToBase64(urlstr, function(base64Img){
    // Base64DataURL
    document.write("<img src='"+base64Img+"'/>");
    //document.write(`<img src='${base64Img}'/>`);
  });

//-------------------------------------------------------------------------------------
//加密算法封装结束
//-------------------------------------------------------------------------------------