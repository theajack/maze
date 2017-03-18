var height,width,cx,cy,px=1,py=1;
var maze=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1],[1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1],[1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1],[1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1],[1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],[1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1],[1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,3,1],[1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1],[1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1],[1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1],[1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1],[1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1],[1,1,3,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1],[1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1],[1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1],[1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1],[1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1],[1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,2,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
//var maze=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
var map=J.id("map"),player=J.id("player"),blocks;
var len,size=maze.length,viewSize=1.5;//config
var mapLen,viewLen;
var starNum=0;
var isDown=false;
var t;
J.ready(function(){
  /*canvas=J.id("gameCanvas");
  height=J.height()-20;
  canvas.width=height;
  canvas.height=height;
  geneMaze();*/
  setSize();
  createMaze();
  J.class("button").event({
    "onmousedown":function(){
      var dirc=this.attr("id");
      checkDirc(dirc);
      var time=0;
      t=setInterval(function(){
        time+=10;
        if(time>100){
          checkDirc(dirc);
        }
      },10);
    },
    "onmouseup":function(){
      clearInterval(t);
    },
    "onmouseout":function(){
      clearInterval(t);
    }
  })
});
function test(){
  
}
function setSize(){
  height=J.height(),width=J.width(),cx=width/2,cy=height/2;
  len=Math.round(((width>height)?height:width)*2/9);
  mapLen=len*size;
  viewLen=viewSize*2*len;
  if(J.isMobile()){
    var bwWidth=(width>height)?width/3:width*0.8;
    var blen=Math.round(bwWidth/3);
    bwWidth=blen*3;
    bwHeight=blen*2;
    J.id("btnBigWrapper").css("display","block");
    J.id("btnWrapper").css({
      width:bwWidth+"px",
      height:bwHeight+"px"
    });
    J.class("fill").css({
      width:(blen-4)+"px",
      height:(blen-4)+"px"
    });
    J.class("button").css({
      width:(blen-4)+"px",
      height:(blen-4)+"px"
    });
  }else{
    J.id("btnBigWrapper").css("display","none");
  }
  J.id("view").css({
    left:(cx-viewLen/2)+"px",
    top:(cy-viewLen/2)+"px",
    height:viewLen+"px",
    width:viewLen+"px"
  });
  player.css({
    left:((viewLen-len)/2)+"px",
    top:((viewLen-len)/2)+"px",
    height:len+"px",
    width:len+"px"
  });
  map.css({
    height:mapLen+"px",
    width:mapLen+"px",
    left:(viewLen/2-px*len-len/2)+"px",
    top:(viewLen/2-py*len-len/2)+"px"
  });
  J.id("starWrapper").css({
    left:(cx+viewLen/2-150)+"px",
    top:0+"px"
  });
}
function checkDirc(dirc){
  switch(dirc){
    case "left":checkLeft();break;//left
    case "up":checkUp();break;//up
    case "right":checkRight();break;//right
    case "down":checkDown();break;//down
    default:break;
  }
}
function checkHide(x,y){
  
}
function moveMap(){
  map.css({
    left:(viewLen/2-px*len-len/2)+"px",
    top:(viewLen/2-py*len-len/2)+"px"
  });
  var item=maze[py][px];
  if(item==3){
    blocks[py*size+px].replaceClass("star","road");
    maze[py][px]=0;
    J.id("starWrapper").child(starNum).addClass("get");
    starNum++;
  }else if(item==2&&starNum==3){
    J.showWait("You win!","success");
  }
}
function checkWin(){ 
  if(blocks[py*size+px]==2&&starNum==3){
    return true;
  }
  return false;
}
function createMaze(){ 
  maze.each(function(a){
    a.each(function(item){
      var name="";
      switch(item){
        case 0:name="road";break;
        case 1:name="wall";break;
        case 2:name="target";break;
        case 3:name="star";break;
        default:break;
      }
      map.append(J.new("div").addClass(name).css({
        height:len+"px",
        width:len+"px"
      }));
    })
  });
  blocks=map.child();
}
function createRoad(){
  
}
function openBranch(){
  
}
function splitMaze(){
  
}
document.onkeydown=function(e){
  switch(e.keyCode){
    case 37:checkLeft();break;//left
    case 38:checkUp();break;//up
    case 39:checkRight();break;//right
    case 40:checkDown();break;//down
    default:break;
  }
}
function checkLeft(){
  if(maze[py][px-1]!=1){
    px--;
    moveMap();
  }
}
function checkRight(){
  if(maze[py][px+1]!=1){
    px++;
    moveMap();
  }
}
function checkUp(){
  if(maze[py-1][px]!=1){
    py--;
    moveMap();
  }
}
function checkDown(){
  if(maze[py+1][px]!=1){
    py++;
    moveMap();
  }
}
function test(){
  px++;
  moveMap();
}
window.onresize=function(){
  setSize();
  setBlockSize();
}
function setBlockSize(){
  var names=["road","wall","target","star"];
  names.each(function(item){
    J.class(item).css({
      height:len+"px",
      width:len+"px"
    });
  });
}