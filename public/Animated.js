function Animated(){
  GenericObject.call(this)
  this.attachInteraction(base)
	this.attachInteraction(movable())
}

Animated.prototype = Object.create(GenericObject.prototype)
Animated.prototype.constructor = Animated

var base = {
    attitude: function(){
       //console.log("Non determined attitude function")
    },
    show: function(){
        console.log("Non determined show function")
    },
    update: function(){
        for(var i=0;i<this.passives.length;i++){
			    this.passives[i].call(this);
        }
        this.move()
        this.attitude()
    },
    passives: {},
    states: {}
}

var movable = function(){
  return {
    pos: {
      x :  Math.random()*500,
      y : Math.random()*600
    },
    vector: {
      x: 0,
		  y: 0,
    },
    setSpeed: function(x,y){
      this.vector.x = x || 0
      this.vector.y = y || 0
    },
    setPos: function(x,y){
      this.pos.x = x || 0
      this.pos.y = y || 0
    },
    move: function(){
      this.pos.x += this.vector.x
      this.pos.y += this.vector.y
    }
  }
}