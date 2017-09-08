/************************step one****************************/
var backImage, bearImage, barImage, alertImage, obstacleImage, waveImage, selectImage;
var process = 0;
cxt.lineWidth = 10;
cxt.strokeStyle = '#aaa';
cxt.fillStyle = '#aaa';
cxt.font = '80px SimHei';

function drawProgress() {
    cxt.clearRect(0, 0, myCanvasWidth, myCanvasHeight);
    cxt.beginPath();
    var startAngle = -90 * Math.PI / 180;
    var endAngle = (-90 + 360 * process / 100) * Math.PI / 180;
    cxt.arc(myCanvasWidth / 2, myCanvasHeight / 2, 100, startAngle, endAngle);
    cxt.stroke();
    var txt = process + '%';
    var txtWidth = cxt.measureText(txt).width;
    cxt.fillText(txt, myCanvasWidth / 2 - txtWidth / 2, myCanvasHeight / 2 + 20);
    if (process >= 100) {
        //加载完毕，调用定时器
        main();
    }
}

function getAllImage() {
    backImage = new Image();
    backImage.src = "./image/canvas/background.png";
    backImage.onload = function() {
            process += 10;
            drawProgress();
        }
        //bear 6
    bearImage = [];
    for (var i = 0; i < 6; i++) {
        //(function(i) {
        var index = i;
            var img = new Image();
            img.src = './image/canvas/bear' + index + '.png';
            img.onload = function() {
                process += 7;
                drawProgress();
            }
            bearImage.push(img);
       // })(i)
    }
    //台阶
    barImage = new Image();
    barImage.src = "./image/canvas/bar.png";
    barImage.onload = function() {
            process += 6;
            drawProgress();
        }
        //提示框
    alertImage = new Image();
    alertImage.src = "./image/canvas/alertImg.png";
    alertImage.onload = function() {
            process += 6;
            drawProgress();
        }
        //怪兽
    obstacleImage = [];
    for (var i = 0; i < 4; i++) {
        var index = i;
        //(function(i) {
            var img = new Image();
            img.src = "./image/canvas/obstacle" + index + ".png";
            img.onload = function() {
                process += 6;
                drawProgress();
            }
            obstacleImage.push(img);
     //   })(i)
    }
    //海浪
    waveImage = new Image();
    waveImage.src = "./image/canvas/wave.png";
    waveImage.onload = function() {
            process += 6;
            drawProgress();
        }
        //
    selectImage = new Image();
    selectImage.src = "./image/canvas/select.png";
    selectImage.onload = function() {
        process += 6;
        drawProgress();
    }
}
getAllImage();

/**********************************step two******************************************/


function model(width, height, left, top, name, index) {
    this.width = width;
    this.height = height;
    this.posotionX = left;
    this.posotionY = top;
    this.name = name;
    this.index = index;
    this.obstacleIndex = 1;
    this.obstaclePosotionX = 0;
}

model.prototype.init = function() {
    this.obstacleIndex = Math.floor(Math.random() * 4);
    //console.log(this.obstacleIndex + "obstacleIndex")
    this.obstaclePosotionX = Math.floor(Math.random() * 350);
    this.getRandomY();
    this.move();
}

model.prototype.getRandomY = function() {
    if (this.name == 'wave') {

    } else {
        do {
            var num = Math.floor(Math.random() * 3);
            switch (num) {
                case 0:
                    this.posotionY = 100;
                    break;
                case 1:
                    this.posotionY = 225;
                    break;
                case 2:
                    this.posotionY = 368;
                    break;
            }
            var index = this.index;
            var preIndex = index ? index - 1 : barArr.length - 1;
        } while (barArr[preIndex].posotionY == barArr[index].posotionY)
    }
}

model.prototype.move = function() {
    //if (this.name == 'wave') console.log('dog');
    if (this.posotionX / 1 + this.width / 1 > 0) {
        this.posotionX -= 4;
    } else {
        //重新初始化，修改this.posotionX
        this.posotionX = myCanvasWidth; //+ this.width;
        this.init();
    }
}

var barArr = [];
barArr[0] = new model(567, 56, -350, 368, 'bar', 0); //368 === 316
barArr[1] = new model(567, 56, 150, 225, 'bar', 1); //225 ==> 173
barArr[2] = new model(567, 56, 650, 100, 'bar', 2); //100 ==> 48



barArr[2].obstacle = function() {
    ObjObstact.posotionY = this.posotionY - 52;
    ObjObstact.posotionX = this.posotionX / 1 + 200 + this.obstaclePosotionX;
    cxt.drawImage(obstacleImage[this.obstacleIndex], 0, 0, 108, 82, ObjObstact.posotionX, ObjObstact.posotionY, 80, 60);
}
barArr[2].move = function() {
    if (this.posotionX / 1 + this.width / 1 > 0) {
        this.posotionX -= 4;
    } else {
        //重新初始化，修改this.posotionX
        this.posotionX = myCanvasWidth; //+ this.width;
        this.init();
    }
    this.obstacle();
}



function drawBar(barArr, img) {
    for (var i = 0; i < barArr.length; i++) {
        barArr[i].move();
        var sx, sy, swidth, sheight, x, y, width, height;
        sx = barArr[i].posotionX < 0 ? (0 - barArr[i].posotionX / 1) : 0;
        sy = 0;
        swidth = barArr[i].posotionX < 0 ? barArr[i].width / 1 + barArr[i].posotionX : barArr[i].width / 1;
        sheight = barArr[i].height / 1;
        x = barArr[i].posotionX < 0 ? 0 : barArr[i].posotionX / 1;
        y = barArr[i].posotionY / 1;
        width = swidth;
        height = barArr[i].height / 1;
        cxt.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
    }
}


/********************************step three*************************************/

function waveModel(width, height, left, top, name, index) {
    model.apply(this, arguments);
}

Object.setPrototypeOf(waveModel.prototype, model.prototype);

waveModel.prototype.move = function() {
    //if (this.name == 'wave') console.log('dog');
    if (this.posotionX / 1 + this.width / 1 > 0) {
        this.posotionX -= 3;
    } else {
        //重新初始化，修改this.posotionX
        this.posotionX = myCanvasWidth; //+ this.width;
        this.init();
    }
}
var waveArr = [];
waveArr.push(new waveModel(294, 44, 0, 450, 'wave', 0));
waveArr.push(new waveModel(294, 44, 294, 450, 'wave', 0));
waveArr.push(new waveModel(294, 44, 588, 450, 'wave', 0));
waveArr.push(new waveModel(294, 44, 882, 450, 'wave', 0));


/********************************step four*************************************/

function person(width, height, left, top, name, index) {
    model.apply(this, arguments);
    this.nowIndex = 0;
    this.firstClick = false;
    this.secondClick = false;
    this.index = 0;
    this.targetIndex = 0;
    this.canDrop = true;
    this.clicked = false;
    this.jumped = false;
    this.otherLimit = false;
    this.checkAfterJump = false;
    this.once = false;
}
//10,140,280
var personObj = new person(79, 102, 200, 10, 'bear', 0);
personObj.jump = function(index) {
    //先判断当前对象的left值在什么范围
    if (this.targetIndex > index) {
        this.jumped = true;
        this.posotionY -= 5;
    } else {
        this.jumped = false;
        this.checkDown(index);
    }
}
personObj.down = function() {
    //先判断当前对象的left值在什么范围
    this.posotionY += 3;
    if (this.posotionY >= myCanvasHeight) {
        //alert("失败")
        commonFunc()
    }
}

personObj.checkImpact = function() {
    if (ObjObstact.posotionX + 30 < this.posotionX + this.width &&
        ObjObstact.posotionX - 30 + ObjObstact.width > this.posotionX &&
        ObjObstact.posotionY + 30 < this.posotionY + this.height &&
        ObjObstact.posotionY + ObjObstact.height > this.posotionY
    ) {
        //重新再来
        commonFunc()
    }
}

personObj.checkDown = function(index) {
    if (this.jumped) return;
    for (var i = 0; i < barArr.length; i++) {
        if (barArr[i].posotionX < (this.posotionX + this.width * 2 / 3) &&
            (barArr[i].posotionX + barArr[i].width) > (this.posotionX + 1 * this.width / 3) &&
            barArr[i].posotionY > (this.posotionY + this.height - 30) &&
            barArr[i].posotionY < (this.posotionY + this.height + 30)) {
            this.canDrop = false;
            if (barArr[i].posotionY == 100) {
                this.posotionY = 10;
            } else if (barArr[i].posotionY == 225) {
                this.posotionY = 140;
            } else {
                this.posotionY = 280;
            }
            if (index > (this.targetIndex + this.index) / 2) {
                this.once = false;
                this.firstClick = false;
                this.secondClick = false;
            }
            return;
        } else {
            this.once = true;
            this.canDrop = true;
            this.down();
        }
    }
}
personObj.loop = function(index) {
    var currentIndex = Math.floor(index / 5);
    var nowIndex = currentIndex % bearImage.length;
    if (index % 5 == 0) {
        this.checkDown(index);
        this.jump(index);
    }
    if (this.firstClick || this.secondClick || this.canDrop) {
        cxt.drawImage(bearImage[3], this.posotionX, this.posotionY);
    } else {
        cxt.drawImage(bearImage[nowIndex], this.posotionX, this.posotionY);
    }
    this.checkImpact(index);

}



function jump() {
    personObj.clicked = true;
    if (!personObj.firstClick) {
        personObj.firstClick = true;
    } else if (personObj.firstClick && personObj.secondClick == false) {
        personObj.secondClick = true;
    } else {
        personObj.otherLimit = true;
    }

}

function personJump(index) {
    if (!personObj.clicked) return;
    if (personObj.otherLimit) {
        personObj.otherLimit = false;
        personObj.clicked = false;
        return;
    }
    personObj.index = index;
    if (personObj.firstClick && personObj.secondClick) {
        personObj.clicked = false;
        personObj.targetIndex = index + 30;
        //personObj.otherLimit = ;
        //第二次点击
    } else if (personObj.firstClick && personObj.secondClick == false) {
        //第一次点击\
        personObj.clicked = false;
        personObj.targetIndex = index + 30;
    } else {
        personObj.clicked = false;
        personObj.firstClick = true;
        personObj.targetIndex = index + 30;
    }
}


/***************************************STEP five*****************************************/

function ObstacleModel(width, height, left, top, name, index) {
    model.apply(this, arguments);
}
var ObjObstact = new ObstacleModel(80, 60, 800, 500, 'Obstact', 1);
var ObjObstact1 = new ObstacleModel(80, 60, 800, 500, 'Obstact', 0);



/***************************** step last****************************************/


function main() {
    var index = 0;
    var timer = setInterval(function() {
        index++;
        cxt.clearRect(0, 0, myCanvasWidth, myCanvasHeight);
        cxt.drawImage(backImage, 0, 0);
        drawBar(barArr, barImage);
        drawBar(waveArr, waveImage);
        if (!GAMEOVER) {
            personObj.loop(index);
            personJump(index);
            personObj.jump(index);
        } else {
            cxt.drawImage(alertImage, 0, 0);
            cxt.drawImage(selectImage, 330, 274)
        }
    }, 20)
}

/*********************step last***********************/
function commonFunc(index) {
    GAMEOVER = true;
}

document.onkeydown = function(e) {
    var code = e.keyCode;
    switch (code / 1) {
        case 13:
            if (GAMEOVER) {
                window.location.reload();
            } else
                jump();
            break;
    }
}
