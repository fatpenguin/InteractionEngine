var basicObject;
var Defencers = [];

var World = {
  getTarget: function(){
    return Defencers
  }
}
function setup(){
  createCanvas(500,600)
  // Set up attacker
  basicObject = new GenericObject();
  basicObject.attachInteraction(base)
  basicObject.attachInteraction(appearanceAttack)
  basicObject.attachInteraction(movable())
  basicObject.attachInteraction(attitudeAttack)

  // Set up Defencer
  var Defencer = new GenericObject();
  Defencer.attachInteraction(base)
  Defencer.attachInteraction(appearanceDefense)
  Defencer.attachInteraction(movable())
  Defencer.attachInteraction(attitudeDefense)

  var Defencer1 = new GenericObject();
  Defencer1.attachInteraction(base)
  Defencer1.attachInteraction(appearanceDefense)
  Defencer1.attachInteraction(movable())
  Defencer1.attachInteraction(attitudeDefense)

  var Defencer2 = new GenericObject();
  Defencer2.attachInteraction(base)
  Defencer2.attachInteraction(appearanceDefense)
  Defencer2.attachInteraction(movable())
  Defencer2.attachInteraction(attitudeDefense)

  var Defencer3 = new GenericObject();
  Defencer3.attachInteraction(base)
  Defencer3.attachInteraction(appearanceDefense)
  Defencer3.attachInteraction(movable())
  Defencer3.attachInteraction(attitudeDefense)

  Defencers.push(Defencer)
  Defencers.push(Defencer1)
  Defencers.push(Defencer2)
  Defencers.push(Defencer3)
}

var base = {
  attitude: function(){
    console.log("Non determined attitude function")
  },
  show: function(){
    console.log("Non determined show function")
  },
  update: function(){
    for(var i=0;i<this.passives.length;i++){
      console.log("Passives called")
      this.passives[i].call(this);
    }
    this.attitude()
  },
  passives: [],
  states = {}
}

var appearanceAttack = {
  color: [255,0,0],
  show: function(){
    fill(this.color[0],this.color[1],this.color[2])
    ellipse(this.pos.x,this.pos.y,20,20)
  }
}

var appearanceDefense = {
  color: [0,255,0],
  show: function(){
    fill(this.color[0],this.color[1],this.color[2])
    ellipse(this.pos.x,this.pos.y,20,20)
  }
}

var movable = function(){
  return {
    pos: {
      x :  Math.random()*500,
      y : Math.random()*600
    },
    move: function(x,y){
      this.pos.x += x
      this.pos.y += y
    }
  }
}

var attitudeAttack = {
  attitude: function(){
    var targets = World.getTarget()
    var closest = {
      pos: {
        x: 0,
        y: 0
      }
    }
    var closestDistance = 100000
    for(var i=0;i<targets.length;i++){
      if(!targets[i].dead){
        var target = targets[i]
        var distanceX = (target.pos.x - this.pos.x ) * (target.pos.x - this.pos.x )
        var distanceY = (target.pos.y - this.pos.y ) * (target.pos.y - this.pos.y )
        var totalDistance = Math.sqrt(distanceY + distanceX)
        if(totalDistance < closestDistance){
          closest = target
          closestDistance = totalDistance
        }
      }
    }
    if(closestDistance < 20){
      this.attack(closest)
    }
    else{
      var versX;
      var versY;
      if((closest.pos.x - this.pos.x ) > 0){
        versX = 5
      }
      else{
        versX = -5
      }
      if((closest.pos.y - this.pos.y ) > 0){
        versY = 5
      }
      else{
        versY = -5
      }
      this.move(versX,versY)
    }
  },
  lifePoints: 150,
  attack: function(target){
    if(target.hit){
      target.hit(this)
    }
  },
  hit: function(attacker){
    this.lifePoints--
    if(this.lifePoints <= 0){
      console.log("Il est moooooooooooort")
      this.die();
    }
  },
  die: function(){
    this.dead = true
    this.color = [255,0,255]
  }
}

var attitudeDefense = {
  attitude: function(){

  },
  hit: function(attacker){
    this.color = [0,0,255]
    if(attacker.hit){
      poison(attacker)
    }
    this.dead = true
  }
}

function poison(target){
  if(target.passives.indexOf(poison) != -1){
    target.states.PoisonDuration += 5
  }
  else{
    target.states.PoisonDuration = 5
    target.passives.push(function(){
      this.lifePoints-=1;
      if(this.lifePoints <= 0)
        this.die()
      target.states.PoisonDuration--
      if(target.states.PoisonDuration == 0){
        target.passives.splice(target.passives.indexOf(poison),1)
        target.states.PoisonDuration = undefined
      }
    })
  }
}
function draw(){
  background(0)
  basicObject.update()
  basicObject.show()
  var targets = World.getTarget()
  for(var i=0;i<targets.length;i++){
    targets[i].update()
    targets[i].show()
  }

  if(basicObject.dead){
      noLoop();
  }
}
