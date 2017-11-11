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
		  y: -1,
    },
    move: function(x,y){
      this.pos.x += x
      this.pos.y += y
    }
  }
}