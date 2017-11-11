var GenericObject = require("./GenericObject")

function animatedObject(startingPosition,attitude){
  this.position = {
    x: startingPosition.x,
    y: startingPosition.y,
    z: startingPosition.z
  }
  this.attitude =  attitude
}


animatedObject.prototype = Object.create(GenericObject.prototype)
animatedObject.prototype.constructor = animatedObject

animatedObject.prototype.update = function(){
  this.attitude()
}

animatedObject.prototype.changeAttitude = function(newAttitude){
  this.attitude = newAttitude
}

module.exports = animatedObject
