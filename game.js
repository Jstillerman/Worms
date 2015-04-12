$( document ).ready(function(){
  $(".overlay").animate({opacity: "0"}, 1500);
  $("#canvasID").animate({"border-radius": "0"}, 1500);
})


var canvas = document.getElementById("canvasID");
var ctx = canvas.getContext("2d");

var timers= []



function addObject(obj){
  var tmp = Object.create(obj)
  var speed= 0.5*Math.random();

  tmp.img = image("players/player_" + rand() % 5 +".png");

  tmp.init();

  timers.push(window.setInterval(function(){tmp.update();}, speed*10))


}

function draw(img, x, y){
  ctx.drawImage(img, x, y);
}




function image(str){
  var i = new Image();
  i.src = str;
  return i;
}


var player = {
  img: image("players/player_1.png"),
  x: 300,
  y: 300,
  xspeed: 1,
  yspeed: 1,
  speed: 1,
  automatecount: 0,
  init: function(){},
  update: function(){
    this.automatecount+=this.speed;
    this.y += this.xspeed*this.speed;

    this.x += this.yspeed*this.speed;
    draw(this.img, this.x, this.y);
    if(Math.floor(this.automatecount) % 1 == 0){this.automate();}
  },
  automate: function(){
    if(rand() % 30 == 0){
      this.swap(true);
    }
    if(rand()%30 == 0){
      this.swap(false);
    }
  },
  swap: function(lr){
    if(lr){this.xspeed *= -1;}
    if(!lr){this.yspeed *= -1;}
  }

}





function rand(){
  return Math.floor(Math.random()*1000);
}


for(var i = 0; i < 20; i++){
  addObject(player);
}
