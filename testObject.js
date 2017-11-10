var warrios = []


var World = {
  getTarget: function(){
    return warrios
  }
}

function setup(){
  createCanvas(500,600)
  // Set up attacker
  for(let i=0;i<5;i++){
	if(i%2==1)
		warrios.push(new Warrior(true));
	else
		warrios.push(new Warrior(false));
  }
}

function draw(){
  background(0)
  allDead = true
  for(let i=0;i<warrios.length;i++){
	  warrios[i].update()
	  warrios[i].show()
	  if(!warrios[i].dead){
		  allDead = false
	  }
  }
  if(allDead){
	  noLoop()
  }
}
