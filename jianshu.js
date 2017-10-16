window.onload=function() {

var h=document.getElementById("header");
    var yin = document.getElementById("yincangsecond");

    var bian = document.getElementById("bianhua");
    var second = document.getElementsByClassName("secondyincang");
    var ohead = document.getElementById("myhead");

    var news = document.getElementById("new");
    var guan = document.getElementById("guanzhu");
    var firstyin = document.getElementById("yincangfirst");
    var fyin = document.getElementById("yincang");

    var sousuo=document.getElementById("sousuo");
    var so=document.getElementById("divinput");

    var faxian = document.getElementById("faxian");
var Aa= document.getElementById("Aa");

var moshi = document.getElementById("moshi");
var kai=document.getElementById("kai");
var g=document.getElementById("guan");

    var yun = document.getElementsByClassName('yun');
    var app=document.getElementById("app");
    var erweima=document.getElementById("erweima");



    var mg=document.getElementsByClassName("mg");

   so.onclick = function () {


    };





    app.onmouseover=function(){
erweima.style.display="block";

    };
    
    app.onmouseout=function(){
        erweima.style.display="none";
    };




    for (var j= 0; j< mg.length; j++) {
        mg[j].onmouseover=function() {
          this.style.textDecoration = "underline";
        };
        mg[j].onmouseout=function() {
            this.style.textDecoration = "none";
        }
    }


    function bs(x) {
        x.style.backgroundColor = "black";
    }

    function nl(x) {
        x.style.backgroundColor = "grey";
    }


    guan.onmouseover = function () {
        firstyin.style.display = "block";

    };
    fyin.onmouseover = function () {
        firstyin.style.display = "block";

    };
    fyin.onmouseout = function () {
        firstyin.style.display = "none";

    };


    ohead.onmouseover = function () {
        yin.style.display = "block";

    };
    bian.onmouseover = function () {
        yin.style.display = "block";

    };
    bian.onmouseout = function () {
        yin.style.display = "none";

    };

    faxian.onmouseover = function () {
        bianse(this)
    };
    faxian.onmouseout = function () {
        normal(this)
    };

    news.onmouseover = function () {
        bianse(this)
    };
    news.onmouseout = function () {
        normal(this)
    };
    guan.onmouseover = function () {
        bianse(this)
    };
    guan.onmouseout = function () {
        normal(this)
    };
    function bianse(x) {
        x.style.backgroundColor = "lightgrey";
    }

    function normal(x) {
        x.style.backgroundColor = "white";
    }
    kai.onclick= function() {
        this.style.backgroundColor = "deepskyblue";
        document.body.style.backgroundColor="darkslategrey";
        g.style.backgroundColor = "white";
        h.style.backgroundColor = "darkslategrey";
        yin.style.backgroundColor = "darkslategrey";
        firstyin.style.backgroundColor = "darkslategrey";
        for (var i = 0; i < second.length; i++) {
            second[i].onmouseover = function () {
                bs(this)
            };
            second[i].onmouseout = function () {
                nl(this);
            }

        }

        second.onmouseover = function () {
            second.style.backgroundColor = "black";

        };

        second.onmouseout = function () {
            second.style.backgroundColor = "lightgrey";
        };
        faxian.onmouseover = function () {
            bs(this)
        };
        faxian.onmouseout = function () {
            nl(this)
        };

        news.onmouseover = function () {
            bs(this)
        };
        news.onmouseout = function () {
            nl(this)
        };
        guan.onmouseover = function () {
            bs(this)
        };
        guan.onmouseout = function () {
            nl(this)
        };
        this.style.backgroundColor = "deepskyblue";
        document.body.style.backgroundColor="darkslategrey";
        g.style.backgroundColor = "white";
        h.style.backgroundColor = "darkslategrey";
        yin.style.backgroundColor = "darkslategrey";
        firstyin.style.backgroundColor = "darkslategrey";

    };
    g.onclick= function() {

        faxian.onmouseover = function () {
            bianse(this)
        };
        faxian.onmouseout = function () {
            normal(this)
        };

        news.onmouseover = function () {
            bianse(this)
        };
        news.onmouseout = function () {
            normal(this)
        };
        guan.onmouseover = function () {
            bianse(this)
        };
        guan.onmouseout = function () {
            normal(this)
        };

        for (var i = 0; i < second.length; i++) {
            second[i].onmouseover = function () {
                bianse(this)
            };
            second[i].onmouseout = function () {
                normal(this);
            }

        }

        second.onmouseover = function () {
            second.style.backgroundColor = "black";

        };

        second.onmouseout = function () {
            second.style.backgroundColor = "white";
        };
//变色
        this.style.backgroundColor = "deepskyblue";
        document.body.style.backgroundColor="white";
        kai.style.backgroundColor = "white";
        h.style.backgroundColor = "white";
        yin.style.backgroundColor = "white";
        firstyin.style.backgroundColor = "white";
    };



    if(co="white") {



    }

else
{


}
    function stopBubble(e) {
        if(e && e.stopPropagation) { //非IE
            e.stopPropagation();
        } else { //IE
            window.event.cancelBubble = true;
        }
    }


    yun[0].timer = null;
    yun[0].onclick = function (ev) {
        var oEvent = ev || event;
        oEvent.cancelBubble = true;
        stopBubble(oEvent);
        startmove(this, 300);




    };
    document.body.onclick=function()
    {
        startmove(yun[0], 200);

    };

    yun[1].timer = null;
    yun[0].timer = null;
   yun[1].onclick = function (ev) {
       sousuo.style.display = "block";
       startmove(this, 280);
       startmove(yun[0], 300);
       var oEvent = ev || event;
       oEvent.cancelBubble = true;
       stopBubble(oEvent);




    };

    Aa.onclick = function (ev) {
        var oEvent = ev || event;
        oEvent.cancelBubble = true;
        stopBubble(oEvent);
        moshi.style.display = "block";

    };
    /*$(function(){
        $(".yun").click(function(event){
            event.stopPropagation();});

    });*/
   document.onclick=function()
   {
       sousuo.style.display = "none";
       startmove(yun[1], 180);
      moshi.style.display="none";
   };

    function startmove(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var speed = (target - obj.offsetWidth) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (obj.offsetWidth === target) {
                clearInterval(obj.timer);
            }
            else {
                obj.style.width = obj.offsetWidth + speed + 'px';
            }
        })
    }







    for (var i = 0; i < second.length; i++) {
        second[i].onmouseover = function () {
            bianse(this)
        };
        second[i].onmouseout = function () {
            normal(this);
        }

    }

    second.onmouseover = function () {
        second.style.backgroundColor = "lightgrey";

    };

    second.onmouseout = function () {
        second.style.backgroundColor = "white";
    };


    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 60,//设置宽高
        height: 60
    });
    qrcode.makeCode("http://www.jianshu.com");
    document.getElementById("send").onclick = function () {
        qrcode.makeCode(document.getElementById=("getval").value);
    };
    var er = new QRCode(document.getElementById("er"), {
        width: 60,//设置宽高
        height: 60
    });
    er.makeCode("http://www.jianshu.com");
    document.getElementById("send").onclick = function () {
        er.makeCode(document.getElementById=("getval").value);
    };
};











