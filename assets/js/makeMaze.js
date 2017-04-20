var height=J.height(),width=J.width(),cx=width/2,cy=height/2,px=1,py=1;
var maze,map=J.id("map"),blocks,current;

var mapLen=height-20;
var size=24;//config
var len=Math.round(mapLen/size);
var sx,sy;
J.ready(function(){
  initVara();
  createMaze();
});
function initVara(){
  mapLen=size*len;
  sx=(cx-mapLen/2);
  sy=(cy-mapLen/2);
  current=J.id("current");
  map.css({
    height:mapLen+"px",
    width:mapLen+"px",
    left:(cx-mapLen/2)+"px",
    top:(cy-mapLen/2)+"px"
  });
  current.css({
    height:len+"px",
    width:len+"px",
    left:(sx+px*len)+"px",
    top:(sy+py*len)+"px"
  });
  map.event("onclick","clickMap(event)");
}
function clickMap(e){
  var x=Math.floor((e.clientX-(cx-mapLen/2))/len);
  var y=Math.floor((e.clientY-(cy-mapLen/2))/len);
  if(block==b_road){
    if(x>px){
      for(var i=1;i<=x-px;i++){
        setRoad(px+i,py);
      }
    }else if(x<px){
      for(var i=1;i<=px-x;i++){
        setRoad(px-i,py);
      }
    }
    px=x;
    if(y>py){
      for(var i=1;i<=y-py;i++){
        setRoad(px,py+i);
      }
    }else if(y<py){
      for(var i=1;i<=py-y;i++){
        setRoad(px,py-i);
      }
    }
    py=y;
  }else if(block==b_wall){
    px=x;
    py=y;
    maze[py][px]=b_wall;
    blocks[y*size+x].replaceClass("road","wall");
  }
  setCurrent();
}
function printMaze(){
  var s="["  
  maze.each(function(a,i){
    if(i>0){
      s+=","
    }
    s+="["
    a.each(function(item,j){
      if(j>0){
        s+=","
      }
      s+=item;
    })
    s+="]"
  });
  s+="]";
}
function createMaze(){
  maze=new Array();
  for(var i=0;i<size;i++){
    maze[i]=new Array();
    for(var j=0;j<size;j++){
      map.append(J.new("div").addClass("wall").css({
        height:len+"px",
        width:len+"px"
      }));
      maze[i][j]=1;
    }
  }
  
  blocks=map.child();
  setRoad(1,1);
}
var dirc=-1;
var block=0;
var step_len=-1;
var step_min=2;
var step_max=5;
var step_num=0;
var px=1,py=1;
var d_up=1,d_down=2,d_left=3,d_right=4;
var b_road=0,b_wall=1,b_target=2,b_star=3,b_player=4;
function createRoad(){
  while (step_num<10){
    block=b_road;
    var temp=dirc;
    var t_min,t_max;
    if(temp<3){
      t_min=3;
      t_max=4;
    }else{
      t_min=1;
      t_max=2;
    }
    dirc=J.random(t_min,t_max);
    while(!checkDirc(step_min)){
      dirc=J.random(t_min,t_max);
    }
    step_len=J.random(step_min,step_max);
    while(!checkDirc(step_len)){
      step_len=J.random(step_min,step_max);
    }
    
    switch(dirc){
      case d_up:
        for(var i=0;i<=step_len;i++){
          setRoad(px,py-i);
        }
        py-=step_len;break;
      case d_down:
        for(var i=0;i<=step_len;i++){
          setRoad(px,py+i);
        }
        py+=step_len;break;
      case d_left:
        for(var i=0;i<=step_len;i++){
          setRoad(px-i,py);
        }
        px-=step_len;break;
      case d_right:
        for(var i=0;i<=step_len;i++){
          setRoad(px+i,py);
        }
        px+=step_len;break;
      default:break;
    }
    step_num++;
    createRoad();
  }
}
function setRoad(x,y){
  maze[y][x]=b_road;
  blocks[y*size+x].replaceClass("wall","road");
}
function setCurrent(){
  current.css({
    left:(sx+px*len)+"px",
    top:(sy+py*len)+"px"
  });
}
function checkDirc(len){
  var result=true;
  switch(dirc){
    case d_up:if(len>=py)result=false;break;
    case d_down:if(size-len<=py)result=false;break;
    case d_left:if(len>=px)result=false;break;
    case d_right:if(size-len<=px)result=false;break;
    default:break;
  }
  return result;
}
function openBranch(){
  
}
function splitMaze(){
  
}
document.onkeydown=function(e){
  switch(e.keyCode){
    case 48:block=b_road;break;
    case 49:block=b_wall;break;
    case 50:block=b_target;break;
    case 51:block=b_star;break;
    case 52:block=b_player;break;
    case 53:step_num=0;createRoad();break;
    case 37:left();break;//left
    case 38:up();break;//up
    case 39:right();break;//right
    case 40:down();break;//down
    default:break;
  }
}
function up(){
  py--;
  setRoad(px,py);
  setCurrent();
}
function down(){
  py++;
  setRoad(px,py);
  setCurrent();
}
function left(){
  px--;
  setRoad(px,py);
  setCurrent();
}
function right(){
  px++;
  setRoad(px,py);
  setCurrent();
}