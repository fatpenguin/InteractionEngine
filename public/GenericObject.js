function GenericObject(){

}

GenericObject.prototype.attachInteraction = function(description){
  var self = this
  Object.keys(description).forEach(function(key){
    self[key] = description[key]
  })
}

if(typeof module !== "undefined")
  module.exports = GenericObject
