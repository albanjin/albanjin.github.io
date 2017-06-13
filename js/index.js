/**
 * Created by Administrator on 2017/5/9.
 */


/*封装$*/
window.$=HTMLElement.prototype.$=function(selector){
    var elems=(this==window?document:this)
        .querySelectorAll(selector);
    return elems.length==0?null:
        elems.length==1?elems[0]:
            elems;
}
/*广告图片数组*/
var imgs=[
    {"i":0,"img":"./image/1.jpg"},
    {"i":1,"img":"./image/2.jpg"},
    {"i":2,"img":"./image/3.jpg"},
    {"i":3,"img":"./image/4.jpg"},
    /*{"i":4,"img":"images/index/banner_05.jpg"},*/
];
var slider={
    LIWIDTH:0,//保存每个li的宽度

    DURATION:1000,//每次轮播的总时长
    DISTANCE:0,//每次轮播的总距离
    STEPS:200,//每次轮播的总步数
    interval:0,//轮播每一步的时间间隔
    step:0,//轮播每一步的步长
    moved:0,//本次轮播已经移动的步数
    timer:null,//保存当前动画的序号
    WAIT:3000,//保存自动轮播之间的等待时间
    canAuto:true,//保存当前能否启动自动轮播

    init:function(){//初始化广告轮播
        //获得id为slider的元素计算后的样式的宽，保存在LIWIDTH
        this.LIWIDTH=parseFloat(
            getComputedStyle($("#slider")).width
        );
        this.updateView();

        var me=this;//留住this！
        //计算interval: DURATION/STEPS
        this.interval=this.DURATION/this.STEPS;
        //为id为idxs的ul绑定鼠标进入事件，function(e){
        $("#idxs").addEventListener("mouseover",function(e){
            //如果目标元素是li且目标元素的class不是hover
            if(e.target.nodeName=="LI"&&e.target.className!="hover"){
                //计算移动个数n: 目标元素的内容-idxs中class为hover的元素的内容
                var n=e.target.innerHTML-$("#idxs>.hover").innerHTML;
                //调用move，传入n作为参数
                me.move(n);
            }
        });
        //为id为slider的div绑定鼠标进入事件function(){
        $("#slider").addEventListener("mouseover",function(){
            me.canAuto=false;//修改canAuto属性为false
        })
        //为id为slider的div绑定鼠标移出事件function(){
        $("#slider").addEventListener("mouseout",function(){
            me.canAuto=true;//修改canAuto属性为true
        });
        this.autoMove();//启动自动轮播
    },
    autoMove:function(){//启动自动轮播
        var me=this;
        //启动一次性定时器
        this.timer=setTimeout(function(){
            if(me.canAuto){//如果canAuto为true
                me.move(1);//调用move,传入参数1
            }else{//否则
                me.autoMove();//再次调用autoMove
            }
        },this.WAIT);
    },
    move:function(n){//启动一次轮播，n表示要移动的li个数
        if(this.timer!=null){//如果timer不等于null
            clearTimeout(this.timer);//停止一次性定时器timer
            this.timer=null;
            //$("#imgs").style.left="";//清除id为imgs的left属性
        }
        //获得id为imgs的ul的计算后的left
        var l=parseFloat(getComputedStyle($("#imgs")).left);
        //计算DISTANCE: LIWIDTH*n
        this.DISTANCE=n>0?
        this.LIWIDTH*n-(-l):l;
        //计算step: DISTANCE/STEPS
        this.step=this.DISTANCE/this.STEPS;
        if(n<0){//如果n<0
            //删除imgs结尾的-n个元素，将imgs剩余元素拼接到imgs删除元素的结尾，结果保存回imgs中
            imgs=imgs.splice(imgs.length-(-n),-n).concat(imgs);
            //设置id为imgs的ul的left为DISTANCE
            $("#imgs").style.left=this.DISTANCE+"px";
            this.updateView();//更新页面
        }
        //启动一次性定时器，传入moveStep函数，设置时间为interval，将序号保存在timer中
        this.timer=setTimeout(
            this.moveStep.bind(this,n),this.interval);
    },
    moveStep:function(n){//移动每一步
        //获得id为imgs的ul计算后的样式的left
        var l=parseFloat(getComputedStyle($("#imgs")).left);
        //设置id为imgs的ul的left为left-step
        $("#imgs").style.left=l-this.step+"px";
        this.moved++;//moved+1
        if(this.moved<this.STEPS){//如果moved<STEPS
            //启动一次性定时器，传入moveStep函数，设置时间为interval，将序号保存在timer中
            this.timer=setTimeout(
                this.moveStep.bind(this,n),this.interval);
        }else{//本轮轮播结束
            if(n>0){//如果n>0
                //删除imgs开头的n个元素，再将删除的元素拼接到imgs结尾，结果保存回imgs中
                imgs=imgs.concat(imgs.splice(0,n));
                this.updateView();//更新页面
            }
            $("#imgs").style.left="";//清除id为imgs的ul的left
            this.timer=null;//timer置为null
            this.moved=0;//moved归0
            //每次轮播而技术后，再次调用autoMove启动自动轮播:
            this.autoMove();
        }
    },
    updateView:function(){//专门根据数组的内容，更新界面
        //设置id为imgs的ul的宽为LIWIDTH*imgs的元素个数
        $("#imgs").style.width=this.LIWIDTH*imgs.length+"px";
        //遍历imgs数组中每个图片对象,同时声明空字符串lis和idxs
        for(var i=0,lis="",idxs="";i<imgs.length;i++){
            //向lis中拼接:
            lis+='<li><img src="'+imgs[i].img+'"></li>';
            //向idxs中拼接:"<li>i+1</li>"
            idxs+="<li>"+(i+1)+"</li>";
        }//(遍历结束)
        //设置id为imgs的元素的内容为lis
        $("#imgs").innerHTML=lis;
        //设置id为idxs的元素的内容为idxs
        $("#idxs").innerHTML=idxs;
        //找到id为idxs下的所有li中和imgs中第0个元素的i属性相同位置的元素，设置其class为hover
        $("#idxs>li")[imgs[0].i].className="hover";
    }
}
window.addEventListener("load",function(){slider.init();})

