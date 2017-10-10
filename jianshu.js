window.onload=function() {


    var yin = document.getElementById("yincangsecond");
    var firstyin = document.getElementById("yincangfirst");
    var fyin = document.getElementById("yincang");
    var bian = document.getElementById("bianhua");
    var second = document.getElementsByClassName("secondyincang");
    var ohead = document.getElementById("myhead");

    var news = document.getElementById("new");
    var guan = document.getElementById("guanzhu");
    var faxian = document.getElementById("faxian");
var Aa= document.getElementById("Aa");
var moshi = document.getElementById("moshi");
var kai=document.getElementsByClassName("kai");

    var yun = document.getElementsByClassName('yun');
    var app=document.getElementById("app");
    var erweima=document.getElementById("erweima");
    var sousuo=document.getElementsByClassName("sousuo");

    app.onmouseover=function(){
erweima.style.display="block";
    };
    
    app.onmouseout=function(){
        erweima.style.display="none";
    };

    Aa.onclick = function (ev) {
        var oevent=ev|| event;

        oevent.cancelBubble = true;
        moshi.style.display = "block";

    };
    document.onclick=function(){
        moshi.style.display = "none";

    };
    kai.onclick= function() {
        this.style.backgroundcolor = "deepskyblue";
    };


    function stopBubble(e) {
        if(e && e.stopPropagation) { //非IE
            e.stopPropagation();
        } else { //IE
            window.event.cancelBubble = true;
        }
    }


    yun[0].timer = null;
    yun[0].onclick = function (ev) {
        startmove(this, 300);
        var oEvent = ev || event;
        oEvent.cancelBubble = true;
        stopBubble(oEvent);

        sousuo.style.display="block";

    };
    document.onclick=function()
    {
        startmove(yun[0], 200);
        sousuo.style.display="none";
    };

    yun[1].timer = null;
    yun[0].timer = null;
   yun[1].onclick = function (ev) {
       startmove(this, 280);
       startmove(yun[0], 300);
       var oEvent = ev || event;
       oEvent.cancelBubble = true;
       stopBubble(oEvent);



    };
   $(function(){
$(".yun").click(function(event){
    event.stopPropagation();});

    });
   document.onclick=function()
   {
       startmove(yun[1], 180);
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

//变色
    function bianse(x) {
        x.style.backgroundColor = "lightgrey";
    }

    function normal(x) {
        x.style.backgroundColor = "white";
    }

    faxian.onmouseover = function () {
        bianse(this)
    };
    faxian.onmouseout = function () {
        normal(this);
    };

    news.onmouseover = function () {
        bianse(this)
    };
    news.onmouseout = function () {
        normal(this);
    };
    guan.onmouseover = function () {
        bianse(this)
    };
    guan.onmouseout = function () {
        normal(this);
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











