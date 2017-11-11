var warrios = []


var World = {
  getTarget: function(){
    return warrios
  }
}

var zelda
var zeldaSprite

function setup(){
  createCanvas(500,600)
  zeldaSprite = loadImage("/sprites/zelda2.png")
  // Set up attacker
  for(let i=0;i<20;i++){
	if(i%2==1)
		warrios.push(new Warrior(true));
	else
		warrios.push(new Warrior(false));
  }
  zelda = new Animated()
  zelda.pos.x = 50
  zelda.pos.y = 50
  zelda.attachInteraction(Appearance.zelda)
}

function draw(){
  background(51);
  allDead = true
  for(let i=0;i<warrios.length;i++){
	  warrios[i].update()
	  warrios[i].show()
	  if(!warrios[i].dead){
		  allDead = false
	  }
  }
  zelda.show()
  if(allDead){
	  // noLoop()
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    zelda.vector.y = 1
  } else if (keyCode === RIGHT_ARROW) {
    zelda.vector.y = -1
  }
}
function keyReleased() {
    zelda.vector.y = 0
  return false; // prevent any default behavior
}