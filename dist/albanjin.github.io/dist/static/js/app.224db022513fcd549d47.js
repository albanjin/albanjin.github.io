webpackJsonp([1],{"+Z+Q":function(e,i,t){"use strict";var l=t("2pid"),d=t.n(l),a=t("tra3"),g=t.n(a);i.a={name:"HelloWorld",data:function(){return{allData:d.a.RECORDS,json:d.a.RECORDS,list:[],input:"",search:"",showSearch:!0,tableShow:!0}},methods:{handleAdd:function(e,i){console.log(i),this.list.push(i),this.search="",this.showSearch=!1,this.tableShow=!0},fiveList:function(e){for(var i=0;i<5;i++)this.one()},type0:function(){var e=this,i=this.common(0);if(i.length){g()(".five").attr("disabled",!0);var t=Math.floor(Math.random()*i.length);this.list.push(i.splice(t,1)[0]),i.forEach(function(i){e.json.push(i)}),console.log(this.json.length)}},type1:function(){var e=this,i=this.common(1);if(i.length){g()(".five").attr("disabled",!0);var t=Math.floor(Math.random()*i.length);this.list.push(i.splice(t,1)[0]),i.forEach(function(i){e.json.push(i)}),console.log(this.json.length)}},type2:function(){var e=this,i=this.common(2);if(i.length){g()(".five").attr("disabled",!0);var t=Math.floor(Math.random()*i.length);this.list.push(i.splice(t,1)[0]),i.forEach(function(i){e.json.push(i)}),console.log(this.json.length)}},type3:function(){var e=this,i=this.common(3);if(i.length){g()(".five").attr("disabled",!0);var t=Math.floor(Math.random()*i.length);this.list.push(i.splice(t,1)[0]),i.forEach(function(i){e.json.push(i)}),console.log(this.json.length)}},type4:function(){var e=this,i=this.common(4);if(i.length){g()(".five").attr("disabled",!0);var t=Math.floor(Math.random()*i.length);this.list.push(i.splice(t,1)[0]),i.forEach(function(i){e.json.push(i)}),console.log(this.json.length)}},clear:function(){this.list=[],g()(".five").removeAttr("disabled")},onecool:function(){},onesour:function(){},one:function(){g()(".five").attr("disabled",!0);var e=Math.floor(Math.random()*this.json.length);this.list.push(this.json.splice(e,1)[0])},common:function(e){g()(".five").attr("disabled",!0);var i=[];console.log(this.json.length);for(var t=0;t<this.json.length;t++)this.json[t].type/1==e&&(console.log(this.json[t].type),i.push(this.json.splice(t,1)[0]));return i},handleDelete:function(e,i){console.log(this.json.length+"=====json===="),this.list.splice(e,1),this.list.length||g()(".five").removeAttr("disabled")}},watch:{search:function(e,i){console.log(e+"===>"+i),i.length>0&&0==e.length&&(this.showSearch=!0,this.tableShow=!0)}},computed:{searchList:function(){var e=this,i=[];if(!this.search)return[];for(var t=this.allData,l=0;l<t.length;l++)i=t.filter(function(i){return i.name.indexOf(e.search)>-1});return i},totalPrice:function(){var e=0;for(var i in this.list)e+=this.list[i].price/1;return e}}}},"2pid":function(e,i){e.exports={RECORDS:[{id:"1",name:"山药排骨煲",price:"28.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"2",name:"鲫鱼豆腐汤",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"3",name:"西湖牛肉羹",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"4",name:"西红柿鸡蛋汤",price:"8.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"5",name:"紫菜蛋汤",price:"8.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"6",name:"青菜豆腐汤",price:"8.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"7",name:"榨菜肉丝汤",price:"10.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"8",name:"平桥豆腐羹",price:"10.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"9",name:"蛋花玉米羹",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"10",name:"酒米蛋花羹",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"11",name:"丝瓜蛋汤",price:"8.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"12",name:"松子玉米",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"13",name:"杭椒小炒肉",price:"25.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"14",name:"干煸茶树菇",price:"18.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"15",name:"蒜苗肉丝",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"16",name:"豇豆烧茄子",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"17",name:"爆炒猪肝",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"18",name:"鱼香肉丝",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"19",name:"宫保鸡丁",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"20",name:"花菜炒肉片",price:"15.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"21",name:"莴苣肉丝",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"22",name:"蒜黄炒肉丝",price:"16.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"23",name:"小葱涨蛋",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"24",name:"毛豆丝瓜",price:"15.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"25",name:"虎皮青椒",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"26",name:"家常豆腐",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"27",name:"爆炒肥肠",price:"24.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"28",name:"糖醋里脊",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"29",name:"干锅花菜",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"30",name:"淮阳草",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"31",name:"莴笋肚片",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"32",name:"干锅包菜",price:"16.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"33",name:"木耳炒鸡蛋",price:"18.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"34",name:"地三鲜",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"35",name:"耗油生菜",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"36",name:"蒜泥生菜",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"37",name:"香菇青菜",price:"10.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"38",name:"椒盐平菇",price:"18.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"39",name:"回锅肉",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"40",name:"干煸四季豆",price:"16.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"41",name:"青椒鸡杂",price:"16.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"42",name:"木须肉",price:"16.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"43",name:"干锅鸡",price:"30.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"44",name:"干锅虾",price:"48.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"45",name:"香辣虾",price:"48.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"46",name:"干锅肥肠",price:"40.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"47",name:"干锅牛肉",price:"58.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"48",name:"干锅茶树菇",price:"28.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"49",name:"干锅排骨",price:"48.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"50",name:"南瓜饼",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"4.0",is_cloud:"0.0"},{id:"51",name:"干锅娃娃菜",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"52",name:"韭菜炒鸡蛋",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"53",name:"农家锅巴",price:"18.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"54",name:"玉米烙",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"4.0",is_cloud:"0.0"},{id:"55",name:"麻辣豆腐",price:"8.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"56",name:"酸辣土豆丝",price:"8.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"57",name:"西红柿炒鸡蛋",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"59",name:"平菇炒鸡蛋",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"60",name:"黄瓜炒鸡蛋",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"61",name:"鱼香茄子",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"62",name:"青椒干子肉丝",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"63",name:"丝瓜炒鸡蛋",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"64",name:"芦蒿香干",price:"18.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"65",name:"水煮鸭血",price:"18.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"66",name:"水煮鱼片",price:"22.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"67",name:"水煮肉片",price:"25.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"68",name:"水煮牛三样",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"69",name:"水煮全腰",price:"30.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"70",name:"毛血旺",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"71",name:"臭豆腐肥肠煲",price:"26.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"72",name:"水煮牛柳",price:"25.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"73",name:"牛肉锅仔",price:"58.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"74",name:"干锅牛肉",price:"58.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"75",name:"羊肉锅仔",price:"58.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"76",name:"咸肉河蚌",price:"30.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"77",name:"香辣蟹",price:"48.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"78",name:"红烧带鱼",price:"25.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"79",name:"红烧排骨",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"80",name:"糖醋排骨",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"81",name:"皮肚鱼头",price:"48.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"82",name:"四季豆红烧肉",price:"28.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"83",name:"茶树菇牛柳",price:"26.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"84",name:"红烧小杂鱼",price:"25.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"85",name:"千页豆腐",price:"24.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"86",name:"茶树菇肚丝",price:"28.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"87",name:"雪菜小黄鱼",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"88",name:"干锅辣四件",price:"28.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"89",name:"咸肉大白菜粉丝",price:"30.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"90",name:"蒜泥空心菜",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"91",name:"蒜泥苋菜",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"92",name:"上汤苋菜",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"93",name:"毛豆烧鸡",price:"32.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"94",name:"青椒牛肉",price:"30.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"95",name:"大蒜咸肉",price:"25.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"96",name:"椒盐牛蛙",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"97",name:"地锅小杂鱼",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"98",name:"红烧仔鸡",price:"28.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"99",name:"梅干菜烧肉",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"100",name:"茶树菇烧肉",price:"36.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"101",name:"茶树菇烧鸡",price:"38.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"102",name:"红烧肉",price:"30.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"103",name:"红烧鲫鱼",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"104",name:"酸菜鱼(大)",price:"30.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"105",name:"酸菜鱼(小)",price:"22.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"106",name:"麻辣鸭翅",price:"28.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"107",name:"一碗香",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"108",name:"大盘鸡",price:"45.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"109",name:"酸汤肥牛",price:"25.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"110",name:"干锅牛蛙",price:"38.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"111",name:"芹菜香干",price:"10.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"112",name:"酸汤鱼",price:"25.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"113",name:"红烧肥肠",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"114",name:"土豆牛肉",price:"38.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"115",name:"重庆辣子鸡",price:"30.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"116",name:"干锅鱿鱼",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"117",name:"咸鹅大白菜粉丝",price:"40.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"118",name:"炒螺丝",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"1.0",is_cloud:"0.0"},{id:"119",name:"柠檬鱼",price:"28.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"120",name:"羊肉锅仔",price:"58.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"121",name:"牛肉锅仔",price:"58.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"122",name:"可乐鸡翅（12只）",price:"40.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"123",name:"小鸡炖蘑菇",price:"28.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"124",name:"山东老鹅",price:"48.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"125",name:"娃娃菜烧香肠",price:"38.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"126",name:"地锅鸡",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"127",name:"百味鱼头",price:"45.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"128",name:"木桶牛腩",price:"40.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"129",name:"碳烤鱼(小)",price:"38.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"130",name:"溧水辣子鸡",price:"30.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"131",name:"肥肠鱼",price:"35.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"0.0"},{id:"132",name:"皮蛋豆腐",price:"10.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"1.0"},{id:"133",name:"麻油金针菇",price:"10.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"1.0"},{id:"134",name:"五香牛肉",price:"20.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"1.0"},{id:"135",name:"凉拌西红柿",price:"6.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"1.0"},{id:"136",name:"水煮花生",price:"8.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"1.0"},{id:"137",name:"凉拌黄瓜",price:"6.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"1.0"},{id:"138",name:"盐水鸭",price:"12.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"1.0"},{id:"139",name:"盐水鸭胗",price:"15.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"1.0"},{id:"140",name:"烤鸭",price:"15.0",weight:"0.0",del_flag:"0.0",img:"",type:"0.0",is_cloud:"1.0"},{id:"141",name:"韭菜炒虾米",price:"15.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"142",name:"鸭血豆腐",price:"10.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"143",name:"小鱼头豆腐汤",price:"15.0",weight:"0.0",del_flag:"0.0",img:"",type:"3.0",is_cloud:"0.0"},{id:"144",name:"大煮干丝",price:"18.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"},{id:"145",name:"韭菜涨蛋",price:"14.0",weight:"0.0",del_flag:"0.0",img:"",type:"2.0",is_cloud:"0.0"}]}},JNAF:function(e,i,t){"use strict";var l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"app"}},[t("h1",[e._v(" 点餐")]),e._v(" "),t("router-view")],1)},d=[],a={render:l,staticRenderFns:d};i.a=a},M93x:function(e,i,t){"use strict";function l(e){t("Y3lD")}var d=t("kZvA"),a=t("JNAF"),g=t("Mw9A"),c=l,n=g(d.a,a.a,!1,c,null,null);i.a=n.exports},NHnr:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l=t("VCXJ"),d=t("M93x"),a=t("YaEn"),g=t("i9nl"),c=t.n(g),n=t("c3k3"),p=(t.n(n),t("tra3"));t.n(p);l.default.use(c.a),l.default.config.productionTip=!1,new l.default({el:"#app",router:a.a,template:"<App/>",components:{App:d.a}})},NgUL:function(e,i){},Y3lD:function(e,i){},YaEn:function(e,i,t){"use strict";var l=t("VCXJ"),d=t("zO6J"),a=t("gORT");l.default.use(d.a),i.a=new d.a({routes:[{path:"/",name:"Hello",component:a.a}]})},c3k3:function(e,i){},gORT:function(e,i,t){"use strict";function l(e){t("iE8z"),t("NgUL")}var d=t("+Z+Q"),a=t("pCM2"),g=t("Mw9A"),c=l,n=g(d.a,a.a,!1,c,"data-v-b09b6d3c",null);i.a=n.exports},iE8z:function(e,i){},kZvA:function(e,i,t){"use strict";i.a={name:"app"}},pCM2:function(e,i,t){"use strict";var l=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"hello"},[t("el-input",{attrs:{placeholder:"请输入用餐人数"},model:{value:e.input,callback:function(i){e.input=i},expression:"input"}}),e._v(" "),t("el-input",{staticClass:"key-words",attrs:{placeholder:"请输入关键字"},model:{value:e.search,callback:function(i){e.search=i},expression:"search"}}),e._v(" "),e.searchList.length&&e.showSearch?[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.searchList}},[t("el-table-column",{attrs:{label:"菜名"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("p",[e._v(" "+e._s(i.row.name))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"价格"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("p",[e._v(e._s(i.row.price))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"类型"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("p",[e._v(e._s(i.row.type/1==0?"大荤":i.row.type/1==1?"小荤":i.row.type/1==2?"素菜":"汤"))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){e.handleAdd(i.$index,i.row)}}},[e._v("添加")])]}}])})],1)]:[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.list}},[t("el-table-column",{attrs:{label:"菜名"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("p",[e._v(" "+e._s(i.row.name))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"价格"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("p",[e._v(e._s(i.row.price))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"类型"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("p",[e._v(e._s(i.row.type/1==0?"大荤":i.row.type/1==1?"小荤":i.row.type/1==2?"素菜":"汤"))])]}}])}),e._v(" "),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){e.handleDelete(i.$index,i.row)}}},[e._v("删除")])]}}])})],1)],e._v(" "),t("p",[e._v("共计消费："+e._s(e.totalPrice)+"，人均消费："+e._s(e.input?e.totalPrice/(e.input/1):e.totalPrice))]),e._v(" "),t("el-button",{staticClass:"five",attrs:{type:"warning",round:""},on:{click:e.fiveList}},[e._v("随机五个菜")]),e._v(" "),t("el-button",{attrs:{type:"warning",round:""},on:{click:e.clear}},[e._v("一键删除")]),e._v(" "),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.type0}},[e._v("随机一个大荤")]),e._v(" "),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.type1}},[e._v("随机一个小荤")]),e._v(" "),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.type2}},[e._v("随机一个素菜")]),e._v(" "),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.type3}},[e._v("随机一个汤类")]),e._v(" "),t("el-button",{attrs:{type:"primary",round:""},on:{click:e.one}},[e._v("随机一个菜")])],2)},d=[],a={render:l,staticRenderFns:d};i.a=a}},["NHnr"]);
//# sourceMappingURL=app.224db022513fcd549d47.js.map