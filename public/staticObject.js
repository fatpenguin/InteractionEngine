var GenericObject = require("./GenericObject")

function staticObject(position){
  GenericObject.call(this)
  this.position = {
    x: position.x,
    y: position.y,
    z: position.z
  }
}

staticObject.prototype = Object.create(GenericObject.prototype)
staticObject.prototype.constructor = staticObject
