/**
 * Created by Administrator on 2016/9/5.
 */
$(function(){
    getDate();
    moonLeft();
    moonRight();
    //moonRightBlessing();
    musicIcon();
    addWords();
});
var canplay=true;
function getDate(){
    var date=new Date();
    var y=date.getFullYear();
    var m=date.getMonth()+1;
    var d=date.getDate();
    if(d<=15){
        d=d;
    }else{
        d=15;
    }
    $(".newdate").html(y+"年"+m+"月"+d+"日");
}
function moonLeft(){
    $(".moon-left-words").delay(300).animate({
        left:0,opacity:1
    },700);
    $(".moon-left-img").delay(600).animate({
        left:0,opacity:1
    },500);
}
function moonRight(){
    $(".qing").delay(500).animate({
        left:0
    },800);
    $(".qing-after").delay(800).animate({
        right:0
    },800);
    $(".moon-mingyue").delay(1100).animate({
        left:0,
    },800);
    $(".star").delay(1300).animate({
        left:0,
    },800);
    $(".rabbit").delay(1500).animate({
        left:0,
    },800);
    $(".ji").delay(1700).animate({
        right: "167px",opacity:1
    },800);
    $(".xiang").delay(2000).animate({
        right: "80px",opacity:1
    },800);
}
var i=0;
function theTimer(i){
    var music1=document.getElementById("moon-music");
    var timer= setInterval(function(){
        if(canplay){
            i++;
            $(".music-icon").css({
                "transform":"rotateZ("+i+"deg)",
                "-o-transform":"rotateZ("+i+"deg)",
                "-moz-transform":"rotateZ("+i+"deg)",
                "-webkit-transform":"rotateZ("+i+"deg)",
            });
        }else {
            clearInterval(timer);
            i=0;
        }
    },42);
    if(i>music1.duration*1000){
        clearInterval(timer);
        i=0;
    }
}
function musicIcon(){
    if(canplay){
        theTimer(i);
    }
    $(".music-icon").on("click",function(){
        var music1=document.getElementById("moon-music");
        if(music1.paused){
            console.log( music1.currentTime);
            var i=music1.currentTime*1000/42;
            music1.play();
            canplay=true;
            theTimer(i);
        }else {
            console.log( music1.currentTime);
            music1.pause();
            canplay=false;
            theTimer(i)
        }
    });
}
function addWords(){
    var words1="祝您:";
    var words2="中秋佳节快乐,";
    var words3="月圆人圆事事圆满！";
    var time1=2000;
    var time2=time1+words1.length*150;
    var time3=time2+words2.length*150;
    var time4=time3+words3.length*150;
    delayTimer(time1,words1,$(".first"));
    delayTimer(time2,words2, $(".second1"));
    delayTimer(time3,words3, $(".second2"));
    $(".jinname").delay(time4).animate({
        opacity:1
    },800);
    $(".newdate").delay(time4+300).animate({
        opacity:1
    },800);
}
function delayTimer(delayTime,words,address){
    var words=words;
    var length=words.lenght;
    var address=address;
    var canDoNext=false;
    var delay=setTimeout(function(){
        canDoNext=true;
        appendWords(canDoNext,words,address)
    },delayTime)
}
function  appendWords(canDoNext,words,address){
    if(canDoNext){
        var html="";
        var i=0;
        var timer=setInterval(function(){
            html+=words.charAt(i);
            address.html(html);
            i++;
            if(i>words.length-1){
                clearInterval(timer);
                i=0;
            }
        },150);
    }
}
